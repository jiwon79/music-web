import styles from './LinkItem.module.scss';
import Link from "next/link";
import { Property } from "csstype";
import Image from "next/image";

export interface LinkItemProps {
  title: string;
  url: string;
  imageUrl?: string;
  style?: LinkItemStyle;
}

export interface LinkItemStyle {
  align?: Property.AlignItems
  borderRadius?: Property.BorderRadius<string | number>;
  width?: Property.Width<string | number>;
  height?: Property.Height<string | number>;
}

const LinkItem = ({ title, url, imageUrl, style }: LinkItemProps) => {
  return (
    <Link href={url}>
      <div className={styles.item} style={{ alignItems: style?.align }}>
        <div
          className={styles.item__image}
          style={{
            borderRadius: style?.borderRadius,
            width: style?.width ?? style?.height,
            height: style?.height ?? style?.width,
          }}
        >
          <Image
            src={imageUrl ?? '/mania/mania_1_4.png'}
            objectFit="cover"
            layout={"fill"}
          />
        </div>
        <p className={styles.item__title}>{title}</p>
      </div>
    </Link>
  )
}

export default LinkItem;
