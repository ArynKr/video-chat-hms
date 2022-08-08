import React, { useState } from 'react'
import { useHMSActions } from '@100mslive/react-sdk'
import Preview from './components/Preview'
import './App.css'
import { useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk'
import Room from './components/Room'

/*
const endpoint = 'https://prod-in2.100ms.live/hmsapi/aryankr.app.100ms.live/  '

const getToken = async (user_id) => {
  const response = await fetch(endpoint + 'api/token', {
    method: 'POST',
    body: JSON.stringify({
      user_id,
      role: 'host',
      type: 'app',
      room_id: '62f0ac6cb1e780e78c3aeb1f',
    }),
  })
  const token = await response.json()
  return token
}
*/

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom)
  return <div className="App">{isConnected ? <Room /> : <Preview />}</div>
}

export default App
