import React, { useState, useCallback } from 'react'
import Image from 'next/image'
// import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import styles from './styles.module.scss'

export interface IProps {
    dataResult: string;
}

export default function Index({ dataResult }: IProps) {
  // const [ isZoomed, setIsZoomed ] = useState(false)
  // const handleZoomChange = useCallback(shouldZoom => {
  //   setIsZoomed(shouldZoom)
  // }, [])
  return (
    // <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <div className={styles.containerImage}>
        <Image 
          data-testid='img-content'
          src={dataResult} 
          width={500} 
          height={500} 
          alt="Desired image generated"
        />
      </div>
    // </ControlledZoom>
  )
}