import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
    const { t } = useTranslation()

    useEffect(() => {
        // Scroll animation observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated')
                }
            })
        }, observerOptions)

        const elements = document.querySelectorAll('.scroll-animate')
        elements.forEach(el => observer.observe(el))

        return () => {
            elements.forEach(el => observer.unobserve(el))
        }
    }, [])

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault()
        const target = document.querySelector(targetId)
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <section className="position-relative py-5 overflow-hidden" style={{ paddingTop: '140px', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
            {/* Animated Background */}
            <div className="animated-bg"></div>
            
            {/* Decorative Elements */}
            <div className="decorative-circle" style={{ width: '300px', height: '300px', top: '10%', right: '5%', opacity: 0.3 }}></div>
            <div className="decorative-blob" style={{ width: '250px', height: '250px', bottom: '15%', left: '5%', opacity: 0.2 }}></div>
            <div className="decorative-circle" style={{ width: '200px', height: '200px', top: '50%', left: '10%', opacity: 0.25, animationDelay: '1s' }}></div>
            
            {/* Gradient Overlay */}
            <div className="gradient-overlay" style={{background:"linear-gradient(135deg, rgb(195 79 0 / 10%) 0%, rgb(255 106 0 / 5%) 100%)"}}></div>

            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 text-center">
                        <div className="logo-container justify-content-center mb-4 scroll-animate">
                            <img 
                                src="/assets/headerLogo.png" 
                                alt="BrandShift Logo" 
                                className="logo-image logo-image-large animate-float" 
                            />
                            <span className="display-4 fw-bold text-primary-custom animate-zoom-in">BrandShift</span>
                        </div>
                        <h1 className="display-2 display-md-1 fw-bold mb-4 lh-base text-primary-custom scroll-animate animate-delay-1">
                            {t('hero.title')} <span className="orange-accent position-relative">
                                {t('hero.titleHighlight')}
                                <span className="position-absolute bottom-0 start-0 w-100" style={{ 
                                    height: '4px', 
                                    background: 'linear-gradient(90deg, var(--orange-accent), transparent)',
                                    animation: 'shimmer 2s infinite'
                                }}></span>
                            </span>
                        </h1>
                        <p className="lead mb-5 text-secondary-custom fs-4 scroll-animate animate-delay-2">
                            {t('hero.subtitle')}
                        </p>
                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center scroll-animate animate-delay-3">
                            <a 
                                href="#contact" 
                                onClick={(e) => handleSmoothScroll(e, '#contact')} 
                                className="btn btn-primary-custom btn-lg px-5 py-3 rounded-pill shadow-lg btn-enhanced hover-lift"
                            >
                                {t('hero.getStarted')}
                            </a>
                            <a 
                                href="#services" 
                                onClick={(e) => handleSmoothScroll(e, '#services')} 
                                className="btn btn-outline-custom btn-lg px-5 py-3 rounded-pill btn-enhanced hover-lift"
                            >
                                {t('hero.ourServices')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator animate-bounce-custom"></div>
        </section>
    )
}
