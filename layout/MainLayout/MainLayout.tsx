import { useState } from "react";

import styles from './MainLayout.module.scss';

export default function MainLayout({ children, title }) {
  const [sideOption, setSideOption] = useState<string>('NULL');
  const handleSideOption = (sideBarOption) => {
    setSideOption(sideBarOption);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button onClick={() => handleSideOption('MENU')}>
          메뉴
        </button>
        <p>
          {title}
        </p>
        <button onClick={() => handleSideOption('SEARCH')}>
          검색
        </button>
      </header>
      <div
        className={sideOption == 'NULL' ? '' : styles.overlay}
        onClick={() => handleSideOption('NULL')}
      />
      <main className={styles.main}>
        {children}
      </main>

      {/*<SideBar*/}
      {/*  isOpen={sideOption == 'MENU'}*/}
      {/*  handleSideOption={handleSideOption}*/}
      {/*/>*/}
      {/*<SearchBar*/}
      {/*  isOpen={sideOption == 'SEARCH'}*/}
      {/*  handleSideOption={handleSideOption}*/}
      {/*/>*/}

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
