import styles from './RowScroll.module.scss';
import RowScrollItem, {HomeItemProps} from "../RowScrollItem/RowScrollItem";

interface HomeItemListProps {
  listInfo: HomeItemProps[];
  borderRadius?: number;
}

const RowScroll = ({ listInfo, borderRadius }: HomeItemListProps) => {
  return (
    <div className={styles.container} >
      {listInfo.map((item) =>
        <RowScrollItem
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

export default RowScroll;
