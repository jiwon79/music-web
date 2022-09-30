import styles from './LinkItem.module.scss';
import Link from "next/link";
import { Property } from "csstype";

export interface LinkItemProps {
  title: string;
  url: string;
  imageUrl: string;
  style?: LinkItemStyle;
}

export interface LinkItemStyle {
  align?: Property.AlignItems
  borderRadius?: Property.BorderRadius<string | number>;
  size?: Property.Width<string | number>;
}

const LinkItem = ({ title, url, imageUrl, style }: LinkItemProps) => {
  return (
    <Link href={url}>
      <div className={styles.item} style={{ alignItems: style?.align }}>
        <div
          className={styles.item__image}
          style={{
            borderRadius: style?.borderRadius,
            width: style?.size,
            height: style?.size,
          }}
        />
        <p className={styles.item__title}>{title}</p>
      </div>
    </Link>
  )
}

export default LinkItem;
