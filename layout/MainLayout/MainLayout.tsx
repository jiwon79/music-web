import { useState } from "react";
import cx from 'classnames';
import Sidebar from "./Sidebar/Sidebar";

import styles from './MainLayout.module.scss';
import MainHeader from "./MainHeader/MainHeader";
import MainFooter from "./MainFooter/MainFooter";

export default function MainLayout({ children, title }) {
  const [isSideOpen, setIsSideOpen] = useState<boolean>(false);
  const handleSideOpen = (isSideOpen) => {
    setIsSideOpen(isSideOpen);
  }

  return (
    <div className={styles.container} >
      <MainHeader handleSideOpen={handleSideOpen} title={title} />
      <main className={cx(styles.main, {[styles.sideOpen]: isSideOpen})}>
        {children}
      </main>
      <MainFooter />

      <Sidebar
        isSideOpen={isSideOpen}
        handleSideOpen={handleSideOpen}
      />
      <div
        className={isSideOpen ? styles.overlay : ''}
        onClick={() => handleSideOpen(false)}
      />
    </div>
  )
}
