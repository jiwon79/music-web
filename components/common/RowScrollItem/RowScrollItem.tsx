import styles from './RowScrollItem.module.scss';
import Link from "next/link";

export interface HomeItemProps {
  title: string;
  url: string;
  imageUrl: string;
  borderRadius?: number;
}

const RowScrollItem = ({ title, url, imageUrl, borderRadius }: HomeItemProps) => {
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

export default RowScrollItem;
