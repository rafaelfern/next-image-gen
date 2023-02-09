import Image from 'next/image'
import styles from './styles.module.scss'
import Header from '../components/Header'
import Form from '../components/Form'

async function getData() {
  try{
    const response = await fetch("/api/generate")
    console.log("response",response.json())
  }catch(err){
    console.log("DEU ERRO")
  }
}

export default async function Home() {

  return (
    <main className={styles.container}>
      <div className={styles.containerHeader}>
        <Header />
      </div>
      <div className={styles.inputContent}>
        <Form getData={getData} />
      </div>
      
    </main>
  )
}
