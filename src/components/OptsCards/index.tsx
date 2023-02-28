import { IOptsCardsProps } from '@/interfaces/optsCards'
import React from 'react'
import styles from './styles.module.scss'


export default function OptsCards({ id, image, title, description }: IOptsCardsProps) {
  return (
    <div className={styles.cardContent}>
      <div className={styles.imgContent}>
        <img src={image} alt={title} width={250} height={250}/>
      </div>
      <div className={styles.descContent}>
        <span className={styles.titleCard}>{title}</span>
        <p className={styles.descriptionCard}>{description}</p>
      </div>
    </div>
    
  )
}
