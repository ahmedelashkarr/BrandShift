import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function WhyChooseUs() {
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

    const features = [
        {
            icon: (
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="orange-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            ),
            title: t('whyChooseUs.fastDelivery.title'),
            description: t('whyChooseUs.fastDelivery.description'),
            number: "01"
        },
        {
            icon: (
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="orange-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: t('whyChooseUs.highQuality.title'),
            description: t('whyChooseUs.highQuality.description'),
            number: "02"
        },
        {
            icon: (
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="orange-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            ),
            title: t('whyChooseUs.customSolutions.title'),
            description: t('whyChooseUs.customSolutions.description'),
            number: "03"
        },
        {
            icon: (
                <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="orange-accent">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: t('whyChooseUs.affordable.title'),
            description: t('whyChooseUs.affordable.description'),
            number: "04"
        }
    ]

    return (
        <section className="py-5 position-relative overflow-hidden">
            {/* Decorative Background */}
            <div className="decorative-circle" style={{ width: '450px', height: '450px', top: '15%', left: '-150px', opacity: 0.1 }}></div>
            <div className="decorative-blob" style={{ width: '380px', height: '380px', bottom: '20%', right: '-100px', opacity: 0.08 }}></div>

            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div className="text-center mb-5 scroll-animate">
                    <h2 className="display-3 fw-bold mb-3 text-primary-custom">
                        {t('whyChooseUs.title')} <span className="orange-accent">{t('whyChooseUs.titleHighlight')}</span>
                    </h2>
                    <p className="lead text-secondary-custom">{t('whyChooseUs.subtitle')}</p>
                    <div className="section-divider"></div>
                </div>
                <div className="row g-4">
                    {features.map((feature, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3 scroll-animate" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="feature-box card card-bg h-100 p-4 rounded-4 shadow-sm border-0 text-center position-relative">
                                {/* Number Badge */}
                                <div className="position-absolute top-0 start-50 translate-middle" style={{ marginTop: '-20px' }}>
                                    <div className="rounded-circle d-flex align-items-center justify-content-center animate-pulse-custom" style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, var(--orange-accent), var(--orange-hover))',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                        boxShadow: '0 4px 15px rgba(255, 106, 0, 0.4)'
                                    }}>
                                        {feature.number}
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-4 mt-3" style={{ minHeight: '80px' }}>
                                    <div className="hover-scale">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="h4 fw-semibold mb-3 text-primary-custom">{feature.title}</h3>
                                <p className="text-tertiary mb-0">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
