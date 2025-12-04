// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    const themeIconMobile = document.getElementById('theme-icon-mobile');
    
    const sunIcon = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
    `;
    
    const moonIcon = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
    `;
    
    if (theme === 'dark') {
        if (themeIcon) themeIcon.innerHTML = sunIcon;
        if (themeIconMobile) themeIconMobile.innerHTML = sunIcon;
    } else {
        if (themeIcon) themeIcon.innerHTML = moonIcon;
        if (themeIconMobile) themeIconMobile.innerHTML = moonIcon;
    }
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form submission handler with EmailJS
function initFormHandler() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const submitText = document.getElementById('submit-text');
    const submitLoading = document.getElementById('submit-loading');
    const formMessage = document.getElementById('form-message');
    
    if (form) {
        // EmailJS Configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
        // 📧 To send emails to omersamer120@gmail.com, you need:
        // 1. Public Key: EmailJS Dashboard → Account → General → Public Key
        // 2. Template ID: EmailJS Dashboard → Email Templates → Create New → Copy Template ID
        // See QUICK_SETUP_GUIDE.md for detailed instructions
        
        const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // ⚠️ REPLACE THIS - Get from EmailJS dashboard
        const EMAILJS_SERVICE_ID = "service_43qfybg"; // ✅ Already configured
        const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // ⚠️ REPLACE THIS - Create template and copy ID
        
        // Check if EmailJS is configured
        const isConfigured = EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY" && 
                           EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" && 
                           EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID";
        
        if (isConfigured) {
            // Initialize EmailJS with your public key
            emailjs.init(EMAILJS_PUBLIC_KEY);
        }
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if EmailJS is configured
            if (!isConfigured) {
                formMessage.textContent = 'Email service is not configured. Please contact us via WhatsApp or set up EmailJS. See EMAILJS_SETUP.md for instructions.';
                formMessage.className = 'px-4 py-3 rounded-lg mb-4 bg-yellow-500/20 text-yellow-500 border border-yellow-500';
                formMessage.classList.remove('hidden');
                return;
            }
            
            // Show loading state
            submitBtn.disabled = true;
            submitText.classList.add('hidden');
            submitLoading.classList.remove('hidden');
            formMessage.classList.add('hidden');
            
            // Prepare email parameters
            const templateParams = {
                from_name: document.getElementById('name').value,
                business_name: document.getElementById('business').value,
                whatsapp: document.getElementById('whatsapp').value,
                message: document.getElementById('message').value,
                to_email: 'omersamer120@gmail.com'
            };
            
            // Send email using EmailJS
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                .then(function(response) {
                    // Success
                    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                    formMessage.className = 'px-4 py-3 rounded-lg mb-4 bg-green-500/20 text-green-500 border border-green-500';
                    formMessage.classList.remove('hidden');
                    form.reset();
                    
                    // Reset button state
                    submitBtn.disabled = false;
                    submitText.classList.remove('hidden');
                    submitLoading.classList.add('hidden');
                }, function(error) {
                    // Error
                    let errorMessage = 'Sorry, there was an error sending your message. ';
                    
                    // Provide more specific error messages
                    if (error.text) {
                        if (error.text.includes('Invalid public key')) {
                            errorMessage += 'EmailJS configuration error. Please check your Public Key.';
                        } else if (error.text.includes('Service not found')) {
                            errorMessage += 'EmailJS Service ID is incorrect.';
                        } else if (error.text.includes('Template not found')) {
                            errorMessage += 'EmailJS Template ID is incorrect.';
                        } else {
                            errorMessage += 'Please try again or contact us via WhatsApp.';
                        }
                    } else {
                        errorMessage += 'Please try again or contact us via WhatsApp.';
                    }
                    
                    formMessage.textContent = errorMessage;
                    formMessage.className = 'px-4 py-3 rounded-lg mb-4 bg-red-500/20 text-red-500 border border-red-500';
                    formMessage.classList.remove('hidden');
                    
                    // Reset button state
                    submitBtn.disabled = false;
                    submitText.classList.remove('hidden');
                    submitLoading.classList.add('hidden');
                    
                    console.error('EmailJS Error:', error);
                });
        });
    }
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initSmoothScroll();
    initFormHandler();
    initMobileMenu();
});

// Export functions for global access
window.toggleTheme = toggleTheme;

