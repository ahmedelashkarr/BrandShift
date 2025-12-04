# Arabic Language Support Implementation

This document explains the Arabic (RTL) language support implementation for the BrandShift project.

## Overview

Full Arabic language support has been added with:
- ✅ English and Arabic language switching
- ✅ RTL (Right-to-Left) layout support
- ✅ Language persistence using localStorage
- ✅ Browser language detection
- ✅ Complete UI translations
- ✅ SEO-friendly lang and dir attributes

## Files Created/Modified

### New Files Created:

1. **`src/i18n.js`** - i18next configuration
   - Sets up language detection
   - Configures translation resources
   - Handles language switching

2. **`src/locales/en.json`** - English translations
   - All UI text in English
   - Organized by component/section

3. **`src/locales/ar.json`** - Arabic translations
   - All UI text translated to Arabic
   - Same structure as English file

4. **`src/components/LanguageSwitcher.jsx`** - Language toggle component
   - Switches between EN/AR
   - Updates HTML lang and dir attributes
   - Persists choice in localStorage

5. **`src/styles/rtl.css`** - RTL-specific styles
   - Handles RTL layout adjustments
   - Fixes Bootstrap utilities for RTL
   - Ensures proper text alignment

### Modified Files:

1. **`package.json`**
   - Added dependencies:
     - `react-i18next`: React integration for i18next
     - `i18next`: Core internationalization framework
     - `i18next-browser-languagedetector`: Browser language detection

2. **`src/main.jsx`**
   - Imported `./i18n` to initialize i18n
   - Imported `./styles/rtl.css` for RTL support

3. **`index.html`**
   - Removed hardcoded `lang="en"` (now set dynamically)

4. **All Component Files** (`Header.jsx`, `Hero.jsx`, `About.jsx`, `Services.jsx`, `Portfolio.jsx`, `WhyChooseUs.jsx`, `Contact.jsx`, `Footer.jsx`)
   - Added `useTranslation` hook
   - Replaced hardcoded text with `t()` function calls
   - Maintained all functionality

## How It Works

### Language Detection Flow:

1. **First Visit:**
   - Checks localStorage for saved language preference
   - If not found, detects browser language
   - Falls back to English if browser language not supported

2. **Language Switching:**
   - User clicks language switcher button
   - Language changes immediately
   - Preference saved to localStorage
   - HTML `lang` and `dir` attributes update automatically

3. **RTL Layout:**
   - When Arabic is selected, `dir="rtl"` is added to HTML
   - RTL CSS rules apply automatically
   - Text alignment, margins, padding reverse
   - Icons and layouts adjust accordingly

## Usage

### Adding New Translations:

1. Add key-value pairs to both `src/locales/en.json` and `src/locales/ar.json`
2. Use the translation key in components: `t('your.key.path')`

Example:
```json
// en.json
{
  "newSection": {
    "title": "New Section Title"
  }
}

// ar.json
{
  "newSection": {
    "title": "عنوان القسم الجديد"
  }
}
```

```jsx
// Component
const { t } = useTranslation()
<h1>{t('newSection.title')}</h1>
```

### Language Switcher Component:

The language switcher is automatically included in the Header component. It appears:
- In desktop navigation (between Contact and Theme toggle)
- In mobile menu (before Theme toggle)

## RTL Styling

The `src/styles/rtl.css` file handles:

- **Bootstrap Utilities:** Reverses margin/padding utilities (me-* → ms-*, etc.)
- **Positioning:** Adjusts start/end positioning
- **Text Alignment:** Ensures proper RTL text flow
- **Form Elements:** Right-aligns inputs and textareas
- **Icons:** Can flip directional icons if needed
- **Flexbox:** Reverses flex direction where appropriate

## Browser Language Detection

Supported languages:
- `en` - English (default)
- `ar` - Arabic

If browser language is Arabic (`ar`, `ar-SA`, `ar-EG`, etc.), Arabic will be selected automatically on first visit.

## SEO Considerations

- HTML `lang` attribute updates dynamically based on selected language
- HTML `dir` attribute set to `rtl` for Arabic, `ltr` for English
- Search engines can properly index content in both languages

## Testing

To test the implementation:

1. **Language Switching:**
   - Click the language switcher (EN/AR button)
   - Verify all text changes
   - Check localStorage: `localStorage.getItem('i18nextLng')`

2. **RTL Layout:**
   - Switch to Arabic
   - Verify text alignment is right-aligned
   - Check navigation, forms, cards align properly
   - Ensure no layout breaks

3. **Persistence:**
   - Switch language
   - Refresh page
   - Verify language persists

4. **Browser Detection:**
   - Clear localStorage
   - Set browser language to Arabic
   - Refresh page
   - Verify Arabic is selected automatically

## Installation

After pulling the changes, run:

```bash
npm install
```

This will install the new dependencies:
- react-i18next
- i18next
- i18next-browser-languagedetector

## Notes

- All functionality remains intact
- No breaking changes to existing code
- Translations are easily maintainable via JSON files
- RTL support is comprehensive and tested
- Performance impact is minimal

## Future Enhancements

Potential improvements:
- Add more languages (French, Spanish, etc.)
- Add language-specific fonts for Arabic
- Implement language-specific date/number formatting
- Add translation management interface
- Support for pluralization rules

