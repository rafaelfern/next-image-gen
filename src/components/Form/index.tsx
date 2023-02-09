import React, { useState } from 'react'
import styles from './styles.module.scss'
import BtnForm from './BtnForm'

interface IProps {
  desiredImgInput: string;
  setDesiredImgInput: (e: any) => void;
  getImage: () => void;
  disabled: boolean;
}

export default function Index({ desiredImgInput, setDesiredImgInput, getImage, disabled }: IProps) {
  
  

  return (
    <div className={styles.formContent}>
      <input 
        type="text" 
        id="textInput" 
        value={desiredImgInput} 
        onChange={e => setDesiredImgInput(e.target.value)}
        placeholder='Input any idea of image you want'
      />
      <BtnForm getImage={getImage} disabled={disabled}/>
    </div>
  )
}
