import React from 'react'
import styles from './styles.module.scss';
interface BtnProps {
  getImage: () => void;
  disabled: boolean;
}

export default function Index({ getImage, disabled }: BtnProps) {
  
  return (
    <button 
      className={styles.btnContent}
      disabled={disabled}
      onClick={() => getImage()}
    > Get Image </button>
  )
}
