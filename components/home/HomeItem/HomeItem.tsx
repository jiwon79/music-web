import styles from './HomeItem.module.scss';

export interface HomeItemProps {
  imageUrl: string;
  title: string;
}

const HomeItem = ({ imageUrl, title }: HomeItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__image} />
      <p className={styles.item__title}>{title}</p>
    </div>
  )
}

export default HomeItem;
