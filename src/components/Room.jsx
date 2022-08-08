import React from 'react'
import VideoTile from './VideoTile'
import { useHMSStore, selectLocalPeer, selectPeers } from '@100mslive/react-sdk'

import styles from './Room.module.css'
import ControlBar from './ControlBar'

const Room = () => {
  const localPeer = useHMSStore(selectLocalPeer)
  const peers = useHMSStore(selectPeers)
  return (
    <div className={styles.room}>
      <div className={styles.container}>
        {localPeer && <VideoTile peer={localPeer} isLocal={true} />}
        {peers &&
          peers
            .filter((peer) => peer.id !== localPeer.id)
            .map((peer) => <VideoTile peer={peer} isLocal={false} />)}
      </div>
      <ControlBar />
    </div>
  )
}

export default Room
