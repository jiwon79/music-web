import Link from "next/link"
import Image from 'next/image'

import styles from "../../styles/listener-type/index.module.css"
import Header from "./../../components/listener-type/Header"

export default function ListenerType() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
        <div className={styles.title}>
          L.istener<br/>
          T.ype<br/>
          T.est
        </div>
        <div>

        </div>
        <Link href={"/listener-type/test"}>
          <a>
            <div className={styles.startButton}>
              <Image
                src={"/icons/musicIcon.png"}
                alt={"start button"}
                width={76}
                height={76}
              />
              <p>START</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
