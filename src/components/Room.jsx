import React from 'react'
import VideoTile from './VideoTile'
import { useHMSStore, selectLocalPeer, selectPeers } from '@100mslive/react-sdk'

import styles from './Room.module.css'
import ControlBar from './ControlBar'
import SettingsModal from './SettingsModal'
import { useState } from 'react'

const Room = () => {
  const localPeer = useHMSStore(selectLocalPeer)
  const peers = useHMSStore(selectPeers)

  const [settingsOpen, setSettingsOpen] = useState(false)

  if (settingsOpen) {
    return (
      <>
        <SettingsModal
          settingsOpen={settingsOpen}
          setSettingsOpen={setSettingsOpen}
        />
        <ControlBar
          settingsOpen={settingsOpen}
          setSettingsOpen={setSettingsOpen}
        />
      </>
    )
  }

  return (
    <div className={styles.room}>
      <div className={styles.container}>
        {localPeer && <VideoTile peer={localPeer} isLocal={true} />}
        {peers &&
          peers
            .filter((peer) => peer.id !== localPeer.id)
            .map((peer) => <VideoTile peer={peer} isLocal={false} />)}
      </div>
      <ControlBar
        settingsOpen={settingsOpen}
        setSettingsOpen={setSettingsOpen}
      />
    </div>
  )
}

export default Room
