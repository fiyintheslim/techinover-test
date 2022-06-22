import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
        

       <Link href="/signup" className={styles.card}>Signup</Link>
       <Link href="/login" className={styles.card}>Login</Link>
      </main>

      
    </div>
  )
}

export default Home
