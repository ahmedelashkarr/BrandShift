import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Portfolio() {
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

    const portfolioItems = [
        { image: "/public/assets/template1.png", title: "Hamlet ", category: "Real Estate" },
        { image: "/public/assets/template2.png", title: "Glint", category: "Digital agency" },
        { image: "/public/assets/template3.png", title: "Coza Store", category: "eCommerce" },
        { image: "/public/assets/template4.png", title: "Academia", category: "Academy" },
        { image: "/public/assets/template5.png", title: "DJoz", category: "Music project" },
        { image: "/public/assets/template6.png", title: "Appco", category: "Business" }
    ]

    return (
        <section id="portfolio" className="py-5 section-alt position-relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="decorative-blob" style={{ width: '350px', height: '350px', top: '10%', left: '-100px', opacity: 0.12 }}></div>
            <div className="decorative-circle" style={{ width: '250px', height: '250px', bottom: '15%', right: '-50px', opacity: 0.1 }}></div>

            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div className="text-center mb-5 scroll-animate">
                    <h2 className="display-3 fw-bold mb-3 text-primary-custom">
                        {t('portfolio.title')} <span className="orange-accent">{t('portfolio.titleHighlight')}</span>
                    </h2>
                    <p className="lead text-secondary-custom">{t('portfolio.subtitle')}</p>
                    <div className="section-divider"></div>
                </div>
                <div className="row g-4">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="portfolio-item rounded-4 overflow-hidden position-relative card-bg shadow-sm">
                                <div className="position-relative overflow-hidden" style={{ height: '280px' }}>
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-100 h-100" 
                                        style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    />
                                    {/* Overlay on Hover */}
                                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{
                                        background: 'linear-gradient(135deg, rgba(255, 106, 0, 0.9), rgba(255, 106, 0, 0.7))',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        zIndex: 1
                                    }}>
                                        <div className="text-center text-white">
                                            <h4 className="fw-bold mb-2">{item.title}</h4>
                                            <span className="badge bg-white text-dark">{item.category}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="h5 fw-semibold text-primary-custom mb-2">{item.title}</h3>
                                    <span className="text-tertiary small">{item.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .portfolio-item:hover img {
                    transform: scale(1.15);
                }
                .portfolio-item:hover .position-absolute {
                    opacity: 1 !important;
                }
            `}</style>
        </section>
    )
}
