import {useState} from "react";
import SideBar from "./sidebar";

import styles from "./style.module.scss"

export default function MainLayout({ children, title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleIsSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div>
      <div className={styles.header}>
        <button
          onClick={() => handleIsSidebarOpen()}
        >
          토글
        </button>
        <p>
          {title}
        </p>
      </div>
      <SideBar
        isOpen={isSidebarOpen}
        handleIsOpen={handleIsSidebarOpen}
      />

      {children}
    </div>
  )
}
