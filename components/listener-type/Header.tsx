import styles from "../../styles/listener-type/Header.module.scss"

export default function Header({title}) {
  const delayList = [0.3, 0.1, 0.2, 0.4, 0.5, 0.9, 1.0, 0.8, 0.7, 0.1, 0.5];
  const scaleList = [0.3, 0.3, 0.3, 0.4, 1.0, 1.0, 1.0, 1.0, 1.0, 0.4, 0.1];

  return (
    <div className={styles.header}>
      <div className={styles.toolBar}>
        <p>{title}</p>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="22" stroke="black" strokeWidth="2"/>
            <path d="M5 18L19 18" stroke="black" strokeWidth="2"/>
          </svg>
          <svg className={styles.toolBar__icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="22" stroke="black" strokeWidth="2"/>
            <rect x="6" y="6" width="12" height="12" stroke="black" strokeWidth="2"/>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="22" stroke="black" strokeWidth="2"/>
            <path d="M18.5 5.5L5.5 18.5" stroke="black" strokeWidth="2"/>
            <path d="M5.5 5.5L18.5 18.5" stroke="black" strokeWidth="2"/>
          </svg>
        </div>
      </div>
      <div className={styles.musicBar}>
        {delayList.map((delay, index) => {
          const delayString = delay.toString() + 's';
          const scaleString = "scale(1, " + scaleList[index].toString() + ')';
          return <div
            key={index.toString()}
            style={{
              animationDelay: delayString,
              // animation: "move 1s ease-in Infinite Alternate"
              transform: scaleString
            }}
          >
          </div>
        })}
      </div>
    </div>
  )
}
