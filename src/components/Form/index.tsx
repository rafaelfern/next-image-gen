import React from 'react'
import styles from './styles.module.scss'
import BtnForm from './BtnForm'
import { AiOutlineClose } from 'react-icons/ai'

export interface IProps {
  desiredImgInput: string;
  setDesiredImgInput: (e: string) => void;
  getImage: () => void;
  disabled: boolean;
}

export default function Index({ desiredImgInput, setDesiredImgInput, getImage, disabled }: IProps) {  
  return (
    <div className={styles.formContent}>
      <div className={styles.inputWrapper}>
        <input
          type="text" 
          id="textInput" 
          value={desiredImgInput} 
          onChange={e => setDesiredImgInput(e.target.value)}
          placeholder='Input any idea of image you want'
          data-testid="input-prompt"
        />
        <AiOutlineClose className={styles.closeIcon} onClick={() => setDesiredImgInput('')}/>
      </div>
      <BtnForm getImage={getImage} disabled={disabled}/>
    </div>
  )
}
