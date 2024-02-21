import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactLenis from '@studio-freight/react-lenis'
import App from './App.tsx'
import '../app/globals.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
  </React.StrictMode>
)
