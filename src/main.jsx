import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Wait until the DOM splash screen completes before mounting React
document.addEventListener('DOMContentLoaded', () => {
  // Check if splash screen exists and set up observer
  const splashScreen = document.getElementById('splash-screen');
  
  // Function to render the app
  const renderApp = () => {
    try {
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log('App successfully rendered');
    } catch (error) {
      console.error('Error rendering app:', error);
      setTimeout(renderApp, 1000); // Retry if fails
    }
  };
  
  // Only use DOM splash screen, not the React one
  if (splashScreen && splashScreen.classList.contains('splash-hidden')) {
    // If splash is already hidden, render immediately
    renderApp();
  } else if (splashScreen) {
    // Set up observer to wait for splash screen to be hidden
    const observer = new MutationObserver((mutations) => {
      if (splashScreen.classList.contains('splash-hidden')) {
        renderApp();
        observer.disconnect();
      }
    });
    
    observer.observe(splashScreen, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    // Backup timeout in case mutations don't trigger
    setTimeout(() => {
      if (!document.getElementById('root').hasChildNodes()) {
        renderApp();
        observer.disconnect();
      }
    }, 4000);
  } else {
    // No splash screen found, render immediately
    renderApp();
  }
});