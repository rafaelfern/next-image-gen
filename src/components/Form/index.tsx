import React, { useRef } from 'react'
import styles from './styles.module.scss'
import BtnForm from './BtnForm'

export interface IProps {
  desiredImgInput: string;
  setDesiredImgInput: (e: string) => void;
  getImage: () => void;
  disabled: boolean;
}

export default function Index({ desiredImgInput, setDesiredImgInput, getImage, disabled }: IProps) {  
  const inputRef = useRef(null)

  return (
    <div className={styles.formContent}>
      <input
        ref={inputRef}
        type="text" 
        id="textInput" 
        value={desiredImgInput} 
        onChange={e => setDesiredImgInput(e.target.value)}
        placeholder='Input any idea of image you want'
        data-testid="input-prompt"
      />
      <BtnForm getImage={getImage} disabled={disabled}/>
    </div>
  )
}
