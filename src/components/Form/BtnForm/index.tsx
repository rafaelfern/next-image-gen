import React from 'react'
import styles from './styles.module.scss';
export interface BtnProps {
  getImage: () => void;
  disabled: boolean;
}

export default function Index({ getImage, disabled }: BtnProps) {
  
  return (
    <button 
      className={styles.btnContent}
      disabled={disabled}
      onClick={() => getImage()}
      data-testid='btn-get'
    > Get Image </button>
  )
}
