import styles from './HomeItem.module.scss';
import Link from "next/link";

export interface HomeItemProps {
  title: string;
  url: string;
  imageUrl: string;
  borderRadius?: number;
}

const HomeItem = ({ title, url, imageUrl, borderRadius }: HomeItemProps) => {
  return (
    <Link href={url}>
      <div className={styles.item}>
        <div
          className={styles.item__image}
          style={{ borderRadius: borderRadius }}
        />
        <p className={styles.item__title}>{title}</p>
      </div>
    </Link>
  )
}

export default HomeItem;
