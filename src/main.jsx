import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Enregistrement du Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => {
      console.log('✅ Service Worker enregistré')
      // Une fois le Service Worker chargé, on affiche l'application
      document.getElementById('root').classList.add('loaded')
    })
    .catch((err) => console.error('❌ Erreur Service Worker:', err));
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)