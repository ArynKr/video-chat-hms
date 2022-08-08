import React, { useRef, useEffect } from 'react'
import { useHMSActions } from '@100mslive/react-sdk'
import styles from './VideoTile.module.css'
import { useHMSStore, selectCameraStreamByPeerID } from '@100mslive/react-sdk'

const VideoTile = ({ peer, isLocal }) => {
  const hmsActions = useHMSActions()
  const videoRef = useRef(null)
  const videoTrack = useHMSStore(selectCameraStreamByPeerID(peer.id))
  useEffect(() => {
    ;(async () => {
      console.log(videoRef.current)
      console.log(videoTrack)
      if (videoRef.current && videoTrack) {
        if (videoTrack.enabled) {
          await hmsActions.attachVideo(videoTrack.id, videoRef.current)
        } else {
          await hmsActions.detachVideo(videoTrack.id, videoRef.current)
        }
      }
    })()
  })

  return (
    <div className={styles.container} style={{ zIndex: '1000' }}>
      <div className={styles.relative}>
        <video
          ref={videoRef}
          autoPlay={true}
          playsInline
          muted={true}
          className={styles.video}
        ></video>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{peer.name}</div>
        </div>
      </div>
    </div>
  )
}

export default VideoTile
