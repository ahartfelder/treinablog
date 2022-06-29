import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <h1 className={styles.title}>
          Treina<span className={styles['title-second-word']}>Blog</span>
        </h1>
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
