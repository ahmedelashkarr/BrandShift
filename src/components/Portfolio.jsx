import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LearningHub_ar from "/public/assets/LearningHub-ar.jpg";

export default function Portfolio() {
    const { t } = useTranslation()
    const [activeLanguages, setActiveLanguages] = useState({})
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [lightboxImage, setLightboxImage] = useState('')

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


    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [lightboxOpen])

    const portfolioItems = [
        {
            images: {
                ar: LearningHub_ar,
                en: "../../public/assets/LearningHub-en.jpg"
            },
            title: "Learning Hub",
            category: "Academy"
        },
        {
            images: {
                ar: "/public/assets/Clinic-ar.jpg",
                en: "/public/assets/Clinic-en.jpg"
            },
            title: "MediCare+",
            category: "Clinic Management"
        },
        {
            images: {
                ar: "/public/assets/warehouse-ar.jpg",
                en: "/public/assets/warehouse-en.jpg"
            },
            title: "WMS",
            category: "Warehouse System"
        }
        // ,
        // {
        //     images: {
        //         ar: "/public/assets/template4-ar.png",
        //         en: "/public/assets/template4-en.png"
        //     },
        //     title: "Academia",
        //     category: "Academy"
        // },
        // {
        //     images: {
        //         ar: "/public/assets/template5-ar.png",
        //         en: "/public/assets/template5-en.png"
        //     },
        //     title: "DJoz",
        //     category: "Music project"
        // },
        // {
        //     images: {
        //         ar: "/public/assets/template6-ar.png",
        //         en: "/public/assets/template6-en.png"
        //     },
        //     title: "Appco",
        //     category: "Business"
        // }
    ]

    const toggleLanguage = (index, e) => {
        e.stopPropagation()
        setActiveLanguages(prev => ({
            ...prev,
            [index]: prev[index] === 'en' ? 'ar' : 'en'
        }))
    }

    const openLightbox = (imageSrc) => {
        setLightboxImage(imageSrc)
        setLightboxOpen(true)
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
        setTimeout(() => setLightboxImage(''), 300) // Clear after animation
    }

    return (
        <>
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
                        {portfolioItems.map((item, index) => {
                            const currentLang = activeLanguages[index] || 'ar';
                            const currentImage = item.images[currentLang];

                            return (
                                <div key={index} className="col-12 col-md-6 col-lg-4 scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="portfolio-item rounded-4 overflow-hidden position-relative card-bg shadow-sm">
                                        <div
                                            className="position-relative overflow-hidden"
                                            style={{ height: '280px', cursor: 'pointer' }}
                                            onClick={() => openLightbox(currentImage)}
                                        >
                                            <img
                                                src={currentImage}
                                                alt={item.title}
                                                className="w-100 h-100"
                                                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                            />

                                            {/* Language Toggle Icon Button */}
                                            <button
                                                onClick={(e) => toggleLanguage(index, e)}
                                                className="language-toggle-btn"
                                                aria-label={`Switch to ${currentLang === 'ar' ? 'English' : 'Arabic'}`}
                                                style={{
                                                    position: 'absolute',
                                                    top: '15px',
                                                    right: '15px',
                                                    width: '44px',
                                                    height: '44px',
                                                    borderRadius: '50%',
                                                    border: 'none',
                                                    backgroundColor: 'var(--bg-secondary)',
                                                    color: 'var(--orange-accent)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                                    zIndex: 2,
                                                    backdropFilter: 'blur(10px)',
                                                    fontSize: '16px',
                                                    fontWeight: 'bold'
                                                }}
                                            >
                                                {currentLang === 'ar' ? (
                                                    <span style={{
                                                        fontFamily: 'Arial, sans-serif',
                                                        fontSize: '20px',
                                                        lineHeight: 1
                                                    }}>ع</span>
                                                ) : (
                                                    <span style={{
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontSize: '13px',
                                                        fontWeight: '700',
                                                        lineHeight: 1
                                                    }}>EN</span>
                                                )}
                                            </button>

                                            {/* Expand Icon */}
                                            <div
                                                className="expand-icon"
                                                style={{
                                                    position: 'absolute',
                                                    top: '15px',
                                                    left: '15px',
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    backgroundColor: 'var(--bg-secondary)',
                                                    color: 'var(--orange-accent)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    transition: 'all 0.3s ease',
                                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                                    zIndex: 2,
                                                    backdropFilter: 'blur(10px)',
                                                    opacity: 0,
                                                    transform: 'scale(0.8)'
                                                }}
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <polyline points="9 21 3 21 3 15"></polyline>
                                                    <line x1="21" y1="3" x2="14" y2="10"></line>
                                                    <line x1="3" y1="21" x2="10" y2="14"></line>
                                                </svg>
                                            </div>

                                            {/* Overlay on Hover */}
                                            <div className="hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{
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
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="lightbox-overlay"
                    onClick={closeLightbox}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '20px',
                        animation: 'fadeIn 0.3s ease',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="lightbox-close"
                        aria-label="Close lightbox"
                        style={{
                            position: 'absolute',
                            top: '30px',
                            right: '30px',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--orange-accent)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                            zIndex: 10000
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    {/* Lightbox Image */}
                    <img
                        src={lightboxImage}
                        alt="Full size preview"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '95%',
                            maxHeight: '95vh',
                            objectFit: 'contain',
                            borderRadius: '12px',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                            animation: 'zoomIn 0.3s ease',
                            border: '2px solid var(--border-light)'
                        }}
                    />
                </div>
            )}

            <style>{`
                .portfolio-item:hover img {
                    transform: scale(1.15);
                }
                .portfolio-item:hover .hover-overlay {
                    opacity: 1 !important;
                }
                .portfolio-item:hover .expand-icon {
                    opacity: 1 !important;
                    transform: scale(1) !important;
                }
                .language-toggle-btn:hover {
                    background-color: var(--orange-accent) !important;
                    color: white !important;
                    transform: scale(1.15) rotate(5deg);
                    box-shadow: 0 6px 20px var(--orange-glow);
                }
                .language-toggle-btn:active {
                    transform: scale(0.95);
                }
                .expand-icon:hover {
                    background-color: var(--orange-accent) !important;
                    color: white !important;
                    transform: scale(1.1) !important;
                    box-shadow: 0 6px 20px var(--orange-glow);
                }
                .lightbox-close:hover {
                    background-color: var(--orange-accent) !important;
                    color: white !important;
                    transform: scale(1.1) rotate(90deg);
                    box-shadow: 0 6px 20px var(--orange-glow);
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes zoomIn {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @media (max-width: 768px) {
                    .lightbox-close {
                        top: 15px !important;
                        right: 15px !important;
                        width: 40px !important;
                        height: 40px !important;
                    }
                }
            `}</style>
        </>
    )
}