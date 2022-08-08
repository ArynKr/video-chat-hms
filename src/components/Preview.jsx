import React, { useState } from 'react'
import { useHMSActions } from '@100mslive/react-sdk'
import styles from './Preview.module.css'

const PreviewScreen = () => {
  const [userName, setUserName] = useState('')
  const hmsActions = useHMSActions()

  const handleSubmit = (e) => {
    e.preventDefault()
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3Nfa2V5IjoiNjJmMGFhM2RiMWU3ODBlNzhjM2FlYWZlIiwicm9vbV9pZCI6IjYyZjBhYzZjYjFlNzgwZTc4YzNhZWIxZiIsInVzZXJfaWQiOiJ1cXhmenlzdyIsInJvbGUiOiJob3N0IiwianRpIjoiNjNiZmYwMmEtNGYyOS00MTdjLWJlZDEtZDUyZTdiMGQ0NTczIiwidHlwZSI6ImFwcCIsInZlcnNpb24iOjIsImV4cCI6MTY2MDAzNTQzNX0.YriIr8uc7bsXXf4SKA2SSOYSafK6Y-pwpMPaV0Ew91k'
    hmsActions.join({
      authToken: token,
      userName,
    })
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          required
          className={styles.input}
          type="text"
          name="name"
          value={userName}
          placeholder="Enter Name..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className={styles.button}>Join</button>
      </form>
    </div>
  )
}

export default PreviewScreen
