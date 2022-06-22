import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
      <Link href="/signup"> 
        <p className={styles.card}>
          Signup
        </p>
      </Link>
      <Link href="/login" >
        <p className={styles.card}>
          Login
        </p>
      </Link>
       
      </main>

      
    </div>
  )
}

export default Home
