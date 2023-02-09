import React from 'react'
import { Mosaic } from "react-loading-indicators"
import styles from './styles.module.scss'

export default function index() {
  return (
    <div className={styles.spinnerContainer}>
        <Mosaic color="#9474AE" size="medium" text="" textColor="" />
    </div>
  )
}
