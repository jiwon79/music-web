import styles from './HomeItem.module.scss';

export interface HomeItemProps {
  imageUrl: string;
  title: string;
  borderRadius?: number;
}

const HomeItem = ({ imageUrl, title, borderRadius }: HomeItemProps) => {
  console.log(borderRadius);

  return (
    <div className={styles.item}>
      <div
        className={styles.item__image}
        style={{ borderRadius: borderRadius }}
      />
      <p className={styles.item__title}>{title}</p>
    </div>
  )
}

export default HomeItem;
