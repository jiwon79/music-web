import styles from './HomeItemList.module.scss';
import HomeItem, {HomeItemProps} from "../HomeItem/HomeItem";

interface HomeItemListProps {
  listInfo: HomeItemProps[];
  borderRadius?: number;
}

const HomeItemList = ({ listInfo, borderRadius }: HomeItemListProps) => {
  return (
    <div className={styles.container} >
      {listInfo.map((item) =>
        <HomeItem
          key={item.url}
          title={item.title}
          url={item.url}
          imageUrl={item.imageUrl}
          borderRadius={borderRadius}
        />
      )}
    </div>
  )
}

export default HomeItemList;
