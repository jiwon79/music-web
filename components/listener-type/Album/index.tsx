import Border from "../Border";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { Music } from "../../../lib/game/listener/types";

interface props {
  music: Music
  type: string
  index: number
}

export default function Album({music, type, index}: props) {
  return (
    <div className={styles.container}>
      <Border innerWidth={10} outerWidth={140} className={styles.album}>
        <Image
          src={"/albums/"+type+"_"+String(index)+".png"}
          alt={"album image"}
          width={120}
          height={120}
        />
      </Border>
      <div className={styles.detail}>
        <p className={styles.title}>{music.title}</p>
        <p className={styles.artist}>{music.artist}</p>
        <div className={styles.buttons}>
          <p>PLAY</p>
          <Link href={music.youtube || ''} passHref>
            <a target="_blank">
              <p>YOUTUBE</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
