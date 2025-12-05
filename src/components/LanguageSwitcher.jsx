import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()

    useEffect(() => {
        // Update HTML attributes when language changes
        const updateDocumentAttributes = () => {
            const html = document.documentElement
            const isRTL = i18n.language === 'ar'
            
            html.setAttribute('lang', i18n.language)
            html.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
            
            // Update body class for RTL styling
            if (isRTL) {
                document.body.classList.add('rtl')
            } else {
                document.body.classList.remove('rtl')
            }
        }

        updateDocumentAttributes()
        
        // Listen for language changes
        i18n.on('languageChanged', updateDocumentAttributes)
        
        return () => {
            i18n.off('languageChanged', updateDocumentAttributes)
        }
    }, [i18n])

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en'
        i18n.changeLanguage(newLang)
        localStorage.setItem('i18nextLng', newLang)
    }

    return (
        <button
            onClick={toggleLanguage}
            className="btn btn-sm border-0 theme-toggle hover-scale"
            aria-label="Toggle language"
            style={{ minWidth: '60px' }}
        >
            <span className="fw-semibold">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
        </button>
    )
}



