import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Hao</span> has claimed this internet space to write his thinking.
        </h1>
        <h2 className={styles.description}>Have a good day! See you later!</h2>
      </main>
    </div>
  )
}
