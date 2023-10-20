import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import App from './pages/App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <App/>
  </React.StrictMode>,
)