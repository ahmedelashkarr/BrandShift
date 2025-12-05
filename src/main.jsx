import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n'
import './styles.css'
import './styles/animations.css'
import './styles/rtl.css'
import { FormspreeProvider } from "@formspree/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormspreeProvider>
      <App />
    </FormspreeProvider>
  </React.StrictMode>,
)

