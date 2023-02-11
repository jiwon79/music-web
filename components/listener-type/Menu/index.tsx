import styles from "./style.module.scss"
import HouseIcon from "/public/icons/house.svg";
import KeyIcon from "/public/icons/key.svg";
import GuitarIcon from "/public/icons/guitar.svg";
import HeavyHeartIcon from "/public/icons/heavy_heart.svg";
import CameraIcon from "/public/icons/camera.svg";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__item}>
        <HouseIcon width={32} height={32} />
      </div>
      <div className={styles.menu__item}>
        <KeyIcon width={32} height={32} />
      </div>
      <div className={styles.menu__item}>
        <GuitarIcon width={32} height={32} />
      </div>
      <div className={styles.menu__item}>
        <HeavyHeartIcon width={32} height={32} />
      </div>
      <div className={styles.menu__item}>
        <CameraIcon width={32} height={32} />
      </div>
    </div>
  )
}
