import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../hooks/useTheme'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
    const { t } = useTranslation()
    const [theme, toggleTheme] = useTheme()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault()
        const target = document.querySelector(targetId)
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            setMobileMenuOpen(false)
        }
    }

    const SunIcon = () => (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="icon-hover" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
    )

    const MoonIcon = () => (
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="icon-hover">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
    )

    const MenuIcon = () => (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="icon-hover">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    )

    return (
        <header className={`fixed top-0 w-100 bg-primary-custom navbar-animated ${scrolled ? 'navbar-scrolled' : ''}`} style={{ zIndex: 1050 }}>
            <nav className="container">
                <div className="d-flex align-items-center justify-content-between py-3">
                    <div className="logo-container animate-fade-in-left">
                        <img src="/assets/logo.png" alt="BrandShift Logo" className="logo-image hover-scale" />
                        <span className="fs-4 fw-semibold text-primary-custom">BrandShift</span>
                    </div>
                    <div className="d-none d-md-flex align-items-center gap-4">
                        <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="nav-link-custom text-decoration-none animate-fade-in-down animate-delay-1">{t('nav.about')}</a>
                        <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="nav-link-custom text-decoration-none animate-fade-in-down animate-delay-2">{t('nav.services')}</a>
                        <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, '#portfolio')} className="nav-link-custom text-decoration-none animate-fade-in-down animate-delay-3">{t('nav.portfolio')}</a>
                        <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="nav-link-custom text-decoration-none animate-fade-in-down animate-delay-4">{t('nav.contact')}</a>
                        <LanguageSwitcher />
                        <button onClick={toggleTheme} className="theme-toggle border-0 hover-scale animate-fade-in-down animate-delay-5" aria-label={t('common.toggleTheme')}>
                            <span id="theme-icon" >
                                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                            </span>
                        </button>
                    </div>
                    <div className="d-flex align-items-center gap-3 d-md-none">
                        <LanguageSwitcher />
                        <button onClick={toggleTheme} className="theme-toggle border-0 hover-scale" aria-label={t('common.toggleTheme')}>
                            <span id="theme-icon-mobile">
                                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                            </span>
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="btn btn-link text-primary-custom p-0 border-0 hover-scale"
                            aria-label={t('common.toggleMenu')}
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile Menu */}
            <div className={`${mobileMenuOpen ? 'd-block animate-slide-down' : 'd-none'} d-md-none bg-primary-custom`} style={{ borderTop: '1px solid var(--border-light)' }}>
                <div className="container py-3">
                    <div className="d-flex flex-column gap-3">
                        <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="nav-link-custom text-decoration-none">{t('nav.about')}</a>
                        <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="nav-link-custom text-decoration-none">{t('nav.services')}</a>
                        <a href="#portfolio" onClick={(e) => handleSmoothScroll(e, '#portfolio')} className="nav-link-custom text-decoration-none">{t('nav.portfolio')}</a>
                        <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="nav-link-custom text-decoration-none">{t('nav.contact')}</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
