import Image from "next/image";
import styles from "./style.module.scss";

interface props {
  title: string;
  descList: Array<string>;
}

export default function Description({title, descList}: props) {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <div className={styles.detailList}>
        <div className={styles.image}>
          <Image
            src={"/icons/kissmark32.png"}
            alt={"kiss mark icon"}
            width={32}
            height={32}
          />
        </div>
        <div className={styles.detail}>
          <div className={styles.bullet}> </div>
          <p>{descList[0]}</p>
        </div>
        <div className={styles.detail}>
          <div className={styles.bullet}> </div>
          <p>{descList[1]}</p>
        </div>
        <div className={styles.detail}>
          <div className={styles.bullet}> </div>
          <p>{descList[2]}</p>
        </div>
      </div>
    </div>
  )
}
