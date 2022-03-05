import styles from "./style.module.scss"
import Image from "next/image";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__item}>
        <Image
          src={"/icons/housebuilding-light.png"}
          alt={"start button"}
          width={32}
          height={32}
        />
      </div>
      <div className={styles.menu__item}>
        <Image
          src={"/icons/key-light.png"}
          alt={"start button"}
          width={32}
          height={32}
        />
      </div>
      <div className={styles.menu__item}>
        <Image
          src={"/icons/guitar-light.png"}
          alt={"start button"}
          width={32}
          height={32}
        />
      </div>
      <div className={styles.menu__item}>
        <Image
          src={"/icons/heavyblackheart-light.png"}
          alt={"start button"}
          width={32}
          height={32}
        />
      </div>
      <div className={styles.menu__item}>
        <Image
          src={"/icons/camera-light.png"}
          alt={"start button"}
          width={32}
          height={32}
        />
      </div>
    </div>
  )
}
