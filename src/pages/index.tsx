import React from 'react'
import { useState, lazy, Suspense } from 'react'
import styles from './styles.module.scss'
import Header from '../components/Header'
import Form from '../components/Form'
import Spinner from '../components/Spinner'
// const ImageResult = lazy(() => import('../components/ImageResult'))
import ImageResult from '../components/ImageResult'
import OptsCards from '@/components/OptsCards'
import { cards }  from '../mock/cards'
import { IOptsCardsProps } from '@/interfaces/optsCards'
import Image from 'next/image'
import ollie from '../assets/DSC_0139.jpg'

export default function Home() {

  const [desiredImgInput, setDesiredImgInput ] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  async function getImage() {
    try {
      setLoading(true);
      setResult("");
      setDisabled(true);
      const response = await fetch("/api/generateImg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ desiredImg: desiredImgInput }),
      });
      
      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      
      setResult(data.result);
      console.log("result",result)

    }catch(err){
      console.error(err);
      alert(err.message);
    }finally{
      setLoading(false);
      setDisabled(false)
    }
  }

  return (
    <main className={styles.container}>
      <div className={styles.containerHeader}>
        <Header />
      </div>
      <div className={styles.inputContent}>
        <Form 
          desiredImgInput={desiredImgInput} 
          setDesiredImgInput={setDesiredImgInput} 
          getImage={getImage}
          disabled={disabled}
        />
      </div>
      <div className={styles.cardContainer}>
        {
          cards.map((el: IOptsCardsProps) => (
            <OptsCards key={el.id} id={el.id} image={el.image} title={el.title} description={el.description} />
          ))
        }
      </div>
      {loading&&(
        <Spinner />
      )}
      {result&&(
        // <Suspense fallback={<Spinner />}>
          <ImageResult dataResult={result}/>
        // </Suspense>
      )}
        
    </main>
  )
}
