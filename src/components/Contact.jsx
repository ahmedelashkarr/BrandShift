import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import ContactForm from './ContactForm'

export default function Contact() {
    const { t } = useTranslation()
    const [formData, setFormData] = useState({
        name: '',
        business: '',
        whatsapp: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formMessage, setFormMessage] = useState({ text: '', type: '' })

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
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

    // EmailJS Configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
    const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY" // ⚠️ REPLACE THIS - Get from EmailJS dashboard
    const EMAILJS_SERVICE_ID = "service_43qfybg" // ✅ Already configured
    const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID" // ⚠️ REPLACE THIS - Create template and copy ID

    const isConfigured = EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY" &&
        EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
        EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID"

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!isConfigured) {
            setFormMessage({
                text: t('contact.errorConfig'),
                type: 'warning'
            })
            return
        }

        setIsSubmitting(true)
        setFormMessage({ text: '', type: '' })

        // Initialize EmailJS
        emailjs.init(EMAILJS_PUBLIC_KEY)

        const templateParams = {
            from_name: formData.name,
            business_name: formData.business,
            whatsapp: formData.whatsapp,
            message: formData.message,
            to_email: 'omersamer120@gmail.com'
        }

        try {
            const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)

            setFormMessage({
                text: t('contact.success'),
                type: 'success'
            })
            setFormData({ name: '', business: '', whatsapp: '', message: '' })
        } catch (error) {
            let errorMessage = t('contact.error') + ' '

            if (error.text) {
                if (error.text.includes('Invalid public key')) {
                    errorMessage += t('contact.errorPublicKey')
                } else if (error.text.includes('Service not found')) {
                    errorMessage += t('contact.errorServiceId')
                } else if (error.text.includes('Template not found')) {
                    errorMessage += t('contact.errorTemplateId')
                } else {
                    errorMessage += t('contact.errorRetry')
                }
            } else {
                errorMessage += t('contact.errorRetry')
            }

            setFormMessage({
                text: errorMessage,
                type: 'error'
            })
            console.error('EmailJS Error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const getMessageClassName = () => {
        if (formMessage.type === 'success') {
            return 'alert alert-success alert-custom animate-slide-down'
        } else if (formMessage.type === 'error') {
            return 'alert alert-danger alert-custom animate-slide-down'
        } else if (formMessage.type === 'warning') {
            return 'alert alert-warning alert-custom animate-slide-down'
        }
        return 'd-none'
    }

    return (
        <section id="contact" className="py-5 section-alt position-relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="decorative-blob" style={{ width: '400px', height: '400px', top: '-100px', right: '-100px', opacity: 0.12 }}></div>
            <div className="decorative-circle" style={{ width: '300px', height: '300px', bottom: '-50px', left: '-50px', opacity: 0.1 }}></div>
            <div className="gradient-overlay"></div>

            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="text-center mb-5 scroll-animate">
                            <h2 className="display-3 fw-bold mb-3 text-primary-custom">
                                {t('contact.title')} <span className="orange-accent">{t('contact.titleHighlight')}</span>
                            </h2>
                            <p className="lead text-secondary-custom">{t('contact.subtitle')}</p>
                            <div className="section-divider"></div>
                        </div>
                        <div className="card card-enhanced card-bg p-4 p-md-5 rounded-4 shadow-lg border-0 scroll-animate animate-delay-1">
                            {/* <form onSubmit={handleSubmit}>
                                {formMessage.text && (
                                    <div className={getMessageClassName()} role="alert">
                                        {formMessage.text}
                                    </div>
                                )}
                                <div className="row g-4">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="name" className="form-label text-secondary-custom fw-semibold">{t('contact.name')}</label>
                                        <input 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            value={formData.name}
                                            onChange={handleChange}
                                            required 
                                            className="form-control form-control-lg rounded-3"
                                            placeholder={t('contact.namePlaceholder')}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="business" className="form-label text-secondary-custom fw-semibold">{t('contact.business')}</label>
                                        <input 
                                            type="text" 
                                            id="business" 
                                            name="business" 
                                            value={formData.business}
                                            onChange={handleChange}
                                            required 
                                            className="form-control form-control-lg rounded-3"
                                            placeholder={t('contact.businessPlaceholder')}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="whatsapp" className="form-label text-secondary-custom fw-semibold">{t('contact.whatsapp')}</label>
                                        <input 
                                            type="tel" 
                                            id="whatsapp" 
                                            name="whatsapp" 
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            required 
                                            className="form-control form-control-lg rounded-3"
                                            placeholder={t('contact.whatsappPlaceholder')}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="message" className="form-label text-secondary-custom fw-semibold">{t('contact.message')}</label>
                                        <textarea 
                                            id="message" 
                                            name="message" 
                                            rows="5" 
                                            value={formData.message}
                                            onChange={handleChange}
                                            required 
                                            className="form-control form-control-lg rounded-3"
                                            placeholder={t('contact.messagePlaceholder')}
                                        ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex flex-column flex-sm-row gap-3">
                                            <button 
                                                type="submit" 
                                                disabled={isSubmitting}
                                                className="btn btn-primary-custom btn-lg flex-fill rounded-pill shadow btn-enhanced hover-lift"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        {t('contact.sending')}
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="me-2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                                        </svg>
                                                        {t('contact.sendMessage')}
                                                    </>
                                                )}
                                            </button>
                                            <a 
                                                href="https://wa.link/iju0wi" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="btn btn-outline-custom btn-lg flex-fill rounded-pill text-decoration-none btn-enhanced hover-lift"
                                            >
                                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="me-2">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                                </svg>
                                                {t('contact.chatWhatsApp')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </form> */}
                            <ContactForm></ContactForm>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
