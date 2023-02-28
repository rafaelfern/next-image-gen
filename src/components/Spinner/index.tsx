import React from 'react'
import { Mosaic } from "react-loading-indicators"
import styles from './styles.module.scss'

export default function Index() {
  return (
    <div className={styles.spinnerContainer}>
        <Mosaic data-testid="mosaic-loading" color="#9474AE" size="medium" text="" textColor="" />
    </div>
  )
}
