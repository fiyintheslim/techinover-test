import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
        
      <div className={styles.card}>
        <Link href="/signup">Signup</Link>
      </div>
      <div className={styles.card}>
        <Link href="/login" >Login</Link>
      </div>
       
      </main>

      
    </div>
  )
}

export default Home
