import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

import styles from './MainLayout.module.scss';
import MainHeader from "./MainHeader/MainHeader";

export default function MainLayout({ children, title }) {
  const [isSideOpen, setIsSideOpen] = useState<boolean>(false);
  const handleSideOpen = (isSideOpen) => {
    setIsSideOpen(isSideOpen);
  }

  return (
    <div className={styles.container} >
      <MainHeader handleSideOpen={handleSideOpen} title={title} />
      <div
        className={isSideOpen ? styles.overlay : ''}
        onClick={() => handleSideOpen(false)}
      />
      <main className={styles.main}>
        {children}
      </main>

      <Sidebar
        isSideOpen={isSideOpen}
        handleSideOpen={handleSideOpen}
      />

      <footer className={styles.footer}>
        <div className={styles.footer__item}>
          item 1
        </div>
        <div className={styles.footer__item}>
          item 2
        </div>
        <div className={styles.footer__item}>
          item 3
        </div>
        <div className={styles.footer__item}>
          item 4
        </div>
      </footer>
    </div>
  )
}
