'use client';

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const handleClick = () => new Audio("/quack.mp3").play()

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        We build software for the web.
        </p>
      </div>

      <div className={styles["logo-box"]} onClick={handleClick}>
        <Image
          className={styles.logo}
          src="/avatar.png"
          alt="A Modest Duck"
          sizes="100%"
          fill
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/about"
          className={styles.card}
        >
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>Learn about the websites we are building.</p>
        </a>

      </div>
    </main>
  )
}
