import MenuIcon from "/public/icons/ic_menu.svg";
import Logo from "/public/images/logo.svg"
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
        ? <Logo />
        : <p className={styles.title}>{title}</p>}
      <div className={styles.button} />
    </header>
  )
}

export default MainHeader;
