import Link from "next/link";
import styles from "./sidebar.module.scss"

export default function SideBar({isOpen, handleIsOpen}) {
  return (
    <div
      className={`${isOpen ? styles.open : styles.close} ${styles.overlay}`}
      onClick={() => handleIsOpen()}
    >
      <div
        className={styles.menu}
        onClick={(event) => event.stopPropagation()}
      >
        <button onClick={() => handleIsOpen()}>
          X
        </button>
        <ul>
          <li>
            <Link href={"/"}>
              <a>홈</a>
            </Link>
          </li>
          <li>
            <Link href={"/past"}>
              <a>과거</a>
            </Link>
          </li>
          <li>
            <Link href={"/current"}>
              <a>현재</a>
            </Link>
          </li>
          <li>
            <Link href={"/game"}>
              <a>게임/테스트</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
