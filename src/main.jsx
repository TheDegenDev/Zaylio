import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Fonction pour initialiser l'application
async function initApp() {
  try {
    if ('serviceWorker' in navigator) {
      // Attendre que le Service Worker soit enregistré
      await navigator.serviceWorker.register('/service-worker.js')
      console.log('✅ Service Worker enregistré')
    }
    
    // Une fois le Service Worker prêt, on rend l'application
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error)
  }
}

// Démarrer l'application
initApp()