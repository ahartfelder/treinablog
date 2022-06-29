import '../ui/styles/globals.css'
import styles from '../ui/styles/Home.module.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <h1 className={styles.title}>
          <Link href={'/'}>
            <a>
              Treina<span className={styles['title-second-word']}>Blog</span>
            </a>  
          </Link>
        </h1>
      </header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
