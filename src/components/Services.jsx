import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Services() {
    const { t } = useTranslation()

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
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

    const services = [
        {
            icon: (
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-primary-custom">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
            ),
            title: t('services.websiteDev.title'),
            description: t('services.websiteDev.description'),
            gradient: "linear-gradient(135deg, rgba(255, 106, 0, 0.2), rgba(255, 106, 0, 0.05))"
        },
        {
            icon: (
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-primary-custom">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
            ),
            title: t('services.landingPages.title'),
            description: t('services.landingPages.description'),
            gradient: "linear-gradient(135deg, rgba(255, 106, 0, 0.2), rgba(255, 106, 0, 0.05))"
        },
        {
            icon: (
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-primary-custom">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
            ),
            title: t('services.branding.title'),
            description: t('services.branding.description'),
            gradient: "linear-gradient(135deg, rgba(255, 106, 0, 0.2), rgba(255, 106, 0, 0.05))"
        },
        {
            icon: (
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-primary-custom">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            ),
            title: t('services.automation.title'),
            description: t('services.automation.description'),
            gradient: "linear-gradient(135deg, rgba(255, 106, 0, 0.2), rgba(255, 106, 0, 0.05))"
        }
    ]

    return (
        <section id="services" className="py-5 position-relative overflow-hidden">
            {/* Decorative Background */}
            <div className="decorative-circle" style={{ width: '500px', height: '500px', top: '20%', right: '-150px', opacity: 0.1 }}></div>
            <div className="decorative-blob" style={{ width: '400px', height: '400px', bottom: '10%', left: '-100px', opacity: 0.08 }}></div>

            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div className="text-center mb-5 scroll-animate">
                    <h2 className="display-3 fw-bold mb-3 text-primary-custom">
                        {t('services.title')} <span className="orange-accent">{t('services.titleHighlight')}</span>
                    </h2>
                    <p className="lead text-secondary-custom">{t('services.subtitle')}</p>
                    <div className="section-divider"></div>
                </div>
                <div className="row g-4">
                    {services.map((service, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3 scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="card card-enhanced card-bg h-100 p-4 rounded-4 shadow-sm border-0 position-relative overflow-hidden">
                                {/* Background Gradient */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: service.gradient,
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    zIndex: 0
                                }} className="service-gradient"></div>
                                
                                <div className="position-relative" style={{ zIndex: 1 }}>
                                    <div className="d-flex align-items-center justify-content-center mb-4 rounded-4 p-3" style={{ 
                                        width: '80px', 
                                        height: '80px', 
                                        background: 'linear-gradient(135deg, var(--orange-accent), var(--orange-hover))',
                                        margin: '0 auto'
                                    }}>
                                        <div className="hover-scale">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <h3 className="h4 fw-semibold mb-3 text-primary-custom text-center">{service.title}</h3>
                                    <p className="text-tertiary mb-0 text-center">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .service-gradient {
                    transition: opacity 0.3s ease;
                }
                .card-enhanced:hover .service-gradient {
                    opacity: 1;
                }
            `}</style>
        </section>
    )
}
