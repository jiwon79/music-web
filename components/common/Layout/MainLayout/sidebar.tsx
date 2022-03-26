import Link from "next/link";
import {useState} from "react";
import styles from "./sidebar.module.scss"

export default function SideBar({isOpen, handleSideOption}) {
  const [pastMenuIsOpen, setPastMenuIsOpen] = useState<boolean>(false);
  const [currentMenuIsOpen, setCurrentMenuIsOpen] = useState<boolean>(false);
  const handlePastMenuIsOpen = () => {
    setPastMenuIsOpen(!pastMenuIsOpen);
  }
  const handleCurrentMenuIsOpen = () => {
    setCurrentMenuIsOpen(!currentMenuIsOpen);
  }

  return (
    <div className={`${isOpen ? styles.open : styles.close} ${styles.menu}`}>
      <button onClick={() => handleSideOption('NULL')}>
        X
      </button>
      <ul>
        <li>
          <Link href={"/"}>
            <a>홈</a>
          </Link>
        </li>
        <li>
          <button onClick={() => handlePastMenuIsOpen()}>
            +
          </button>
          <Link href={"/past"}>
            <a>과거</a>
          </Link>
          {pastMenuIsOpen ?
            <ul>
              <li>
                aa
              </li>
              <li>
                bb
              </li>
            </ul>
          : ''
          }
        </li>
        <li>
          <button onClick={() => handleCurrentMenuIsOpen()}>
            +
          </button>
          <Link href={"/current"}>
            <a>현재</a>
          </Link>
          {currentMenuIsOpen ?
            <ul>
              <li>aa</li>
              <li>bb</li>
            </ul>
          : ''
          }
        </li>
        <li>
          <Link href={"/game"}>
            <a>게임/테스트</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
