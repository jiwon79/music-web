import styles from "./style.module.scss"

export default function MusicBar() {
  const delayList = [0.3, 0.1, 0.2, 0.4, 0.5, 0.9, 1.0, 0.8, 0.7, 0.1,
    0.0, 0.1, 0.5, 0.3, 0.2, 0.4, 0.5, 0.3, 0.4, 0.3, 0.7, 0.1, 0.2,
    0.5, 0.3, 0.2, 0.1, 0.3, 0.1, 0.2, 0.3, 0.5, 0.8, 0.7, 0.5, 0.6,
    0.0, 0.0, 0.0, 0.0
  ];
  const scaleList = [0.3, 0.3, 0.3, 0.4, 1.0, 1.0, 1.0, 1.0, 1.0, 0.4,
    0.1, 0.2, 0.3, 0.1, 0.1, 0.5, 0.4, 0.5, 0.4, 0.2, 0.1, 0.1, 0.1,
    0.1, 0.1, 0.2, 0.1, 0.2, 0.1, 0.1, 0.2, 0.3, 0.6, 0.9, 0.8, 0.7,
    0.1, 0.2, 0.2, 0.1
  ];

  return (
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
  )
}
