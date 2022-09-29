import Link from "next/link";
import MainLayout from "layout/MainLayout/MainLayout";
import styles from "./time.module.scss";

const TimePage = () => {
  return (
    <MainLayout title={'TIME X MUSIC'}>
      <div className={styles.title__wrap}>
        <p className={styles.title}>매니아 발굴기</p>
        <Link href={'/time/mania'}>
          <p className={styles.link}>전체보기</p>
        </Link>
      </div>
    </MainLayout>
  )
}

export default TimePage;
