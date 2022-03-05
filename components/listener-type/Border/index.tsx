import styles from "./style.module.scss";

interface props {
  innerWidth: number;
  outerWidth: number;
  children: JSX.Element
}

export default function Border({ innerWidth, outerWidth, children }: props) {
  return (
    <div
      className={styles.container}
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
