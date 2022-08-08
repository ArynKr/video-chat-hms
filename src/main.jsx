import React from 'react'
import ReactDOM from 'react-dom/client'
import { HMSRoomProvider } from '@100mslive/react-sdk'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <HMSRoomProvider>
      <App />
    </HMSRoomProvider>

  </React.StrictMode>
)
