import React from 'react'
import {
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
} from '@100mslive/react-sdk'
import styles from './ControlBar.module.css'

const ControlBar = () => {
  const hmsActions = useHMSActions()
  const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled)
  const isLocalVideoEnabled = useHMSStore(selectIsLocalVideoEnabled)
  const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled)
  }

  const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!isLocalVideoEnabled)
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        height: '5rem',
        background: 'white',
        paddingBlock: '1.5rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <button className={styles.btn} onClick={toggleAudio}>
        {isLocalAudioEnabled ? 'Mute' : 'Unmute'}
      </button>
      <button className={styles.btn} onClick={toggleVideo}>
        {isLocalVideoEnabled ? 'Hide' : 'Unhide'}
      </button>
      <button className={styles.btn} onClick={toggleVideo}>
        Settings
      </button>
    </div>
  )
}

export default ControlBar
