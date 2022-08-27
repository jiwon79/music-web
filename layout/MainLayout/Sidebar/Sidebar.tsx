import React, { useEffect } from 'react';
import Link from "next/link";
import { motion, PanInfo, useAnimation } from "framer-motion";

import Logo from "/public/images/logo.svg";
import styles from './Sidebar.module.scss';

interface SidebarProps {
  isSideOpen: boolean;
  handleSideOpen: (boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSideOpen, handleSideOpen }) => {
  const controls = useAnimation();
  const width = 200;

  useEffect(() => {
    controls.start(isSideOpen ? "active" : "inactive");
  }, [isSideOpen, controls]);

  const sidekickBodyStyles = {
    active: { x: width },
    inactive: { x: 0 }
  };

  const onDragEnd = (_event: MouseEvent, info: PanInfo) => {
    const isDraggingLeft = info.offset.x < 0;
    const multiplier = isDraggingLeft ? 1 / 2 : 3 / 2;
    const threshold = width * multiplier;

    if (Math.abs(info.offset.x) > threshold && isSideOpen) {
      handleSideOpen(false);
    } else if (Math.abs(info.offset.x) < threshold && !isSideOpen) {
      handleSideOpen(true);
    } else {
      controls.start(isSideOpen ? "active" : "inactive");
    }
  }

  return (
    <motion.div
      className={styles.sidebar}
      style={{ left: -width, width: width }}
      drag="x"
      dragElastic={0.1}
      dragConstraints={{ left: 0, right: width }}
      dragMomentum={false}
      onDragEnd={onDragEnd}
      animate={controls}
      variants={sidekickBodyStyles}
      transition={{ type: "spring", damping: 20, stiffness: 500 }}
    >
      <Logo className={styles.logo} />
      <Link href={"#"}>
        <a className={styles.link}>설정</a>
      </Link>
      <Link href={"#"}>
        <a className={styles.link}>만든이 소개</a>
      </Link>
      <div></div>
    </motion.div>
  )
}

export default Sidebar;
