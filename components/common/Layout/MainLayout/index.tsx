import {useState} from "react";
import SideBar from "./sidebar";

import styles from "./style.module.scss"

export default function MainLayout({ children, title }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <div className={styles.header}>
        <button
          onClick={() =>
            setIsSidebarOpen(!isSidebarOpen)}
        >
          토글
        </button>
        <p>
          {title}
        </p>
      </div>
      <SideBar isOpen={isSidebarOpen} />

      {children}
    </div>
  )
}
