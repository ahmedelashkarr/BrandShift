import { useState, useEffect } from 'react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="position-fixed bottom-0 end-0 m-4 rounded-circle border-0 shadow-lg btn-primary-custom d-flex align-items-center justify-content-center animate-float-slow"
                    style={{
                        width: '50px',
                        height: '50px',
                        zIndex: 1000,
                        transition: 'all 0.3s ease'
                    }}
                    aria-label="Scroll to top"
                >
                    <svg width="24" height="24" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                    </svg>
                </button>
            )}
        </>
    )
}

