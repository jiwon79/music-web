import {useState} from "react";
import SideBar from "./sidebar";

import styles from "./style.module.scss"

export default function MainLayout({ children, title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleIsSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  const handleIsSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  }

  return (
    <div>
      <div className={styles.header}>
        <button onClick={() => handleIsSidebarOpen()}>
          메뉴
        </button>
        <p>
          {title}
        </p>
        <button onClick={() => handleIsSearchOpen()}>
          검색
        </button>
      </div>
      <div className={isSidebarOpen ? styles.overlay : ''}>
      </div>

      <SideBar
        isOpen={isSidebarOpen}
        handleIsOpen={handleIsSidebarOpen}
      />
      {children}
    </div>
  )
}
