import styles from './RowScroll.module.scss';
import RowScrollItem, { ScrollItemProps, ScrollItemStyle} from "../RowScrollItem/RowScrollItem";

interface ScrollListProps {
  listInfo: ScrollItemProps[];
  style?: ScrollItemStyle;
}

const RowScroll = ({ listInfo, style }: ScrollListProps) => {
  return (
    <div className={styles.container} >
      {listInfo.map((item) =>
        <RowScrollItem
          key={item.url}
          title={item.title}
          url={item.url}
          imageUrl={item.imageUrl}
          style={style}
        />
      )}
    </div>
  )
}

export default RowScroll;
