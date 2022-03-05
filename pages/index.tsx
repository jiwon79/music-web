import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>0 Corporation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={"/favicon.ico"} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>Welcome to </span>
          <Link href="./listener-type">
            <a>0 Corporation</a>
          </Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <p>랜딩 페이이이이지이이이이</p>
        <button
          onClick={() => {
            router.push('/listener-type').then(r => r);
          }}
        >
          리스너 테스트 하러가기
        </button>
      </main>
    </div>
  )
}
