import styles from './RowScroll.module.scss';
import LinkItem, { LinkItemProps, LinkItemStyle} from "../LinkItem/LinkItem";

interface ScrollListProps {
  listInfo: LinkItemProps[];
  style?: LinkItemStyle;
}

const RowScroll = ({ listInfo, style }: ScrollListProps) => {
  return (
    <div className={styles.container} >
      {listInfo.map((item) =>
        <LinkItem
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
