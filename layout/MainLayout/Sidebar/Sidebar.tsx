import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
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
    active: { x: 0 },
    inactive: { x: -width }
  };

  return (
    <motion.div
      className={styles.sidebar}
      drag="x"
      dragElastic={0.1}
      dragConstraints={{
        left: -width,
        right: 0
      }}
      dragMomentum={false}
      onDragEnd={(_event, info) => {
        console.log(info);
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
      }}
      animate={controls}
      variants={sidekickBodyStyles}
      transition={{ type: "spring", damping: 20, stiffness: 500 }}
    >
      sidebar
    </motion.div>
  )
}

export default Sidebar;
