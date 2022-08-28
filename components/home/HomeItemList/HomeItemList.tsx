import styles from './HomeItemList.module.scss';
import HomeItem, {HomeItemProps} from "../HomeItem/HomeItem";

interface HomeItemListProps {
  listInfo: HomeItemProps[];
  borderRadius?: number;
}

const HomeItemList = ({ listInfo, borderRadius }: HomeItemListProps) => {
  return (
    <div className={styles.container} style={{ borderRadius: borderRadius }}>
      {listInfo.map((item) =>
        <HomeItem title={item.title} imageUrl={item.imageUrl} />
      )}
    </div>
  )
}

export default HomeItemList;
