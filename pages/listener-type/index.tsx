import Link from "next/link"
import Image from 'next/image'

import styles from "../../styles/listener-type/index.module.css"
import Header from "./../../components/listener-type/Header"
import Menu from "../../components/listener-type/Menu";

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
        <div className={styles.content}>
          <Link href={"/listener-type/test"}>
            <a className={styles.startButton}>
              <div>
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
          <p>
            Hello, World!
          </p>
          <p>Music is the art of arranging sounds in time through the elements of melody, harmony, rhythm, and timbre. It is one of the universal cultural aspects of all human societies. General definitions of music include common elements such as pitch rhythm (and its associated concepts tempo, meter, and articulation), dynamics, and the sonic qualities of timbre and texture. Different styles or types of music may emphasize, de-emphasize or omit some of these elements</p>
        </div>
      </div>
      <Menu/>
    </div>
  )
}
