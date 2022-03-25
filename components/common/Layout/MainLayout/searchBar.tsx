import styles from "./searchBar.module.scss"

export default function SearchBar({isOpen, handleSideOption}) {
  return (
    <div className={`${isOpen ? styles.open : styles.close} ${styles.search}`}>
      <button onClick={() => handleSideOption('NULL')}>
        X
      </button>
      검색검색
    </div>
  )
}
