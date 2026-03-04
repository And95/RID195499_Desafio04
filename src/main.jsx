import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/'
import App from './App'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Root element not found')
}

createRoot(container).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
