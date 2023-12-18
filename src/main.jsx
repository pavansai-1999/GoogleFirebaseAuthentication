import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserAuthContextProvider } from './context/UserAuthContext.jsx'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <BrowserRouter>
  <UserAuthContextProvider  >
  <App />
  </UserAuthContextProvider>
  </BrowserRouter>
   
  </React.StrictMode>,
)
