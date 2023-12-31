import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <div className={styles.grid}>
        <a href="/">
          <h2>
            <span>&lt;-</span> Home 
          </h2>
        </a>
      </div>
      <a className={styles.website} href="https://charity.games/">
        <div className={styles["logo-box"]}>
          <Image
            className={styles.logo}
            src="/charity-games.png"
            alt="Charity Games"
            sizes="100%"
            fill
            priority
          />
        </div>
        <h2>Charity.Games</h2>
        <p>An online arcade for charity</p>
      </a>

    

      <div className={styles.description}>
        <p>
          We build software for the web.
        </p>
      </div>
    </main>
  )
}
