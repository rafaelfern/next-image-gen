import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

interface IProps {
    dataResult: string;
}

export default function index({ dataResult }: IProps) {
  return (
    <div className={styles.containerImage}>
        {/* <span>{dataResult}</span> */}
        <Image src={dataResult} width={500} height={500} alt="Desired image generated"/>
    </div>
  )
}