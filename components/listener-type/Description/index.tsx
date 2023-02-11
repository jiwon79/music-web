import styles from "./style.module.scss";
import KissMarkIcon from "/public/icons/kissmark.svg";

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
          <KissMarkIcon width={32} height={32} />
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
