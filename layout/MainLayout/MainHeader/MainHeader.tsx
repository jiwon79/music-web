import MenuIcon from "/public/icons/ic_menu.svg";
import Image from "next/image";
import styles from './MainHeader.module.scss';

interface MainHeaderProps {
  handleSideOpen: (boolean) => void;
  title: string;
}

const MainHeader = ({ handleSideOpen, title }: MainHeaderProps) => {
  return (
    <header className={styles.header}>
      <button
        className={styles.button}
        onClick={() => handleSideOpen(true)}
      >
        <MenuIcon />
      </button>
      {title === 'illusion'
        ? <Image
          src={'/images/illusion_logo.png'}
          alt={"album image"}
          width={112}
          height={24}
        />
        : <p className={styles.title}>{title}</p>}
      <div className={styles.button} />
    </header>
  )
}

export default MainHeader;
