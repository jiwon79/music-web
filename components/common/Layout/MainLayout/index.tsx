import {useState} from "react";
import SideBar from "./sidebar";
import SearchBar from "./searchBar";

import styles from "./style.module.scss"

export default function MainLayout({ children, title }) {
  const [sideOption, setSideOption] = useState<string>('NULL');
  const handleSideOption = (sideBarOption) => {
    setSideOption(sideBarOption);
  }

  return (
    <div>
      <div className={styles.header}>
        <button onClick={() => handleSideOption('MENU')}>
          메뉴
        </button>
        <p>
          {title}
        </p>
        <button onClick={() => handleSideOption('SEARCH')}>
          검색
        </button>
      </div>
      <div
        className={sideOption == 'NULL' ? '' : styles.overlay}
        onClick={() => handleSideOption('NULL')}
      />

      <SideBar
        isOpen={sideOption == 'MENU'}
        handleSideOption={handleSideOption}
      />
      <SearchBar
        sideOption={sideOption}
        handleSideOption={handleSideOption}
      />

      {children}
    </div>
  )
}
