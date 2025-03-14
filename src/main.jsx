import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Function to ensure the app renders
const renderApp = () => {
  try {
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
    console.log('App successfully rendered')
  } catch (error) {
    console.error('Error rendering app:', error)
    // If there's an error, try again after a short delay
    setTimeout(renderApp, 1000)
  }
}

// Start rendering
renderApp()

// Ensure splash screen is handled properly
if (document.getElementById('splash-screen')) {
  setTimeout(() => {
    const splash = document.getElementById('splash-screen')
    if (splash) {
      splash.style.display = 'none'
    }
  }, 3000) // Backup timeout to hide splash screen
}