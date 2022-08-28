import React from "react";
import cx from 'classnames';
import HomeIcon from '/public/icons/ic_home.svg';
import TimeIcon from '/public/icons/ic_time.svg';
import PlayListIcon from '/public/icons/ic_playlist.svg';
import GameIcon from '/public/icons/ic_game.svg';
import Link from "next/link";
import styles from './MainFooter.module.scss';

const MainFooter = ({ title }) => {
  return (
    <footer className={styles.footer}>
      <Link href={"#1"}>
        <div className={cx(
          styles.footer__item, {[styles.active]: title === 'illusion' }
        )}>
          <HomeIcon />
          <p className={styles.label}>홈</p>
        </div>
      </Link>
      <Link href={"#2"}>
        <div className={cx(
          styles.footer__item, {[styles.active]: title === 'time' }
        )}>
          <TimeIcon />
          <p className={styles.label}>타임X뮤직</p>
        </div>
      </Link>
      <Link href={"#3"}>
        <div className={cx(
          styles.footer__item, {[styles.active]: title === 'playlist' }
        )}>
          <PlayListIcon />
          <p className={styles.label}>플레이리스트</p>
        </div>
      </Link>
      <Link href={"#4"}>
        <div className={cx(
          styles.footer__item, {[styles.active]: title === 'game' }
        )}>
          <GameIcon />
          <p className={styles.label}>게임/테스트</p>
        </div>
      </Link>
    </footer>
  )
}

export default MainFooter;
