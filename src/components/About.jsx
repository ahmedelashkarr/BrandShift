import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function About() {
    const { t } = useTranslation()

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

    return (
        <section id="about" className="py-5 section-alt position-relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="decorative-blob" style={{ width: '400px', height: '400px', top: '-100px', right: '-100px', opacity: 0.15 }}></div>
            <div className="decorative-circle" style={{ width: '300px', height: '300px', bottom: '-50px', left: '-50px', opacity: 0.1 }}></div>

            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="text-center mb-5 scroll-animate">
                            <h2 className="display-3 fw-bold mb-4 text-primary-custom">
                                {t('about.title')} <span className="orange-accent">{t('about.titleHighlight')}</span>
                            </h2>
                            <div className="section-divider"></div>
                        </div>
                        <div className="row g-4">
                            <div className="col-12 col-md-6 scroll-animate animate-delay-1">
                                <div className="card card-enhanced card-bg h-100 p-4 rounded-4 shadow-sm border-0">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ 
                                            width: '60px', 
                                            height: '60px', 
                                            background: 'linear-gradient(135deg, var(--orange-accent), var(--orange-hover))' 
                                        }}>
                                            <svg width="30" height="30" fill="none" stroke="white" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="h4 fw-bold text-primary-custom mb-0">{t('about.innovationTitle')}</h3>
                                    </div>
                                    <p className="text-secondary-custom mb-0">
                                        {t('about.innovationDesc')}
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 scroll-animate animate-delay-2">
                                <div className="card card-enhanced card-bg h-100 p-4 rounded-4 shadow-sm border-0">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ 
                                            width: '60px', 
                                            height: '60px', 
                                            background: 'linear-gradient(135deg, var(--orange-accent), var(--orange-hover))' 
                                        }}>
                                            <svg width="30" height="30" fill="none" stroke="white" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <h3 className="h4 fw-bold text-primary-custom mb-0">{t('about.focusTitle')}</h3>
                                    </div>
                                    <p className="text-secondary-custom mb-0">
                                        {t('about.focusDesc')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 scroll-animate animate-delay-3">
                            <p className="lead text-center text-secondary-custom lh-lg px-3">
                                {t('about.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
