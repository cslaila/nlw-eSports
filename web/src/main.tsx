import React from 'react'
import ReactDOM from 'react-dom/client'
// componente é importado abaixo
import App from './App'

// chama a div 'root' e renderiza (em tela) o nosso componente <App />
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
