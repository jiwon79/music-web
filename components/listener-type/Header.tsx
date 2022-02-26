import styles from "../../styles/listener-type/Header.module.scss"

export default function Header({title}) {
  return (
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
  )
}
