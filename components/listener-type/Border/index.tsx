import styles from "./style.module.scss";

interface props {
  innerWidth: number;
  outerWidth: number;
  children: JSX.Element;
  className?: string;
}

export default function Border({
    innerWidth = 0,
    outerWidth = 0,
    children = null,
    className = ''
  }: props) {
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{
        width: outerWidth,
        height: outerWidth,
      }}
    >
      <div
        style={{
          width: innerWidth,
          height: innerWidth,
        }}
        className={styles.innerBox}
      > </div>
      {children}
    </div>
  )
}
