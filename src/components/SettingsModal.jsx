import {
  useHMSStore,
  useHMSActions,
  selectDevices,
  selectLocalMediaSettings,
} from '@100mslive/react-sdk'
import React from 'react'

import styles from './SettingsModal.module.css'

const SettingsModal = ({ settingsOpen, setSettingsOpen }) => {
  const hmsActions = useHMSActions()
  const devices = useHMSStore(selectDevices)
  const selected = useHMSStore(selectLocalMediaSettings)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalForm}>
        <h3>Settings</h3>
        <hr />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.labelSelect}>
            <label htmlFor="camera">Camera</label>
            <select
              name="camera"
              id="camera"
              value={selected.videoInputDeviceId}
              onChange={(e) =>
                hmsActions.setVideoSettings({ deviceId: e.target.value })
              }
            >
              {devices.videoInput.map((inp) => (
                <option key={inp.deviceId} value={inp.deviceId}>
                  {inp.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.labelSelect}>
            <label htmlFor="microphone">Microphone</label>
            <select
              value={selected.audioInputDeviceId}
              name="mic"
              id="mic"
              onChange={(e) =>
                hmsActions.setAudioSettings({ deviceId: e.target.value })
              }
            >
              {devices.audioInput.map((inp) => (
                <option key={inp.deviceId} value={inp.deviceId}>
                  {inp.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.labelSelect}>
            <label htmlFor="audio">Audio Output</label>
            <select
              value={selected.audioOutputDeviceId}
              name="audio"
              id="audio"
              onChange={(e) => hmsActions.setAudioOutputDevice(e.target.value)}
            >
              {devices.audioOutput.map((inp) => (
                <option key={inp.deviceId} value={inp.deviceId}>
                  {inp.label}
                </option>
              ))}
            </select>
          </div>
          <button onClick={() => setSettingsOpen(false)} className={styles.btn}>
            Close
          </button>
        </form>
      </div>
    </div>
  )
}

export default SettingsModal
