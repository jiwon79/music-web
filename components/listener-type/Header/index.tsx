import styles from "./style.module.scss";

export default function Header({title}) {
  return (
    <div className={styles.toolBar}>
      <p>{title}</p>
      <div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="22" stroke="black" strokeWidth="2"/>
          <path d="M4 12L11.5 6.80385L11.5 17.1962L4 12Z" fill="black"/>
          <path d="M11 12L18.5 6.80385L18.5 17.1962L11 12Z" fill="black"/>
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="22" stroke="black" strokeWidth="2"/>
          <path d="M14 12L6.5 17.1962L6.5 6.80385L14 12Z" fill="black"/>
          <rect x="13.5" y="7" width="2" height="10" fill="black"/>
          <rect x="17" y="7" width="2" height="10" fill="black"/>
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="23" y="23" width="22" height="22" transform="rotate(-180 23 23)" stroke="black" strokeWidth="2"/>
          <path d="M20 12L12.5 17.1962L12.5 6.80385L20 12Z" fill="black"/>
          <path d="M13 12L5.5 17.1962L5.5 6.80385L13 12Z" fill="black"/>
        </svg>
      </div>
    </div>
  )
}
