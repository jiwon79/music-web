import Link from "next/link";
import MainLayout from "layout/MainLayout/MainLayout";
import RowScroll from "components/common/RowScroll/RowScroll";
import styles from "./time.module.scss";
import NotYet from "components/common/NotYet/NotYet";

const TimePage = () => {
  const maniaListInfo = [
    {
      title: "매니아 발굴기 1",
      url: "/time/mania/1",
      imageUrl: "",
    },
    {
      title: "매니아 발굴기 2",
      url: "/time/mania/2",
      imageUrl: "",
    },
    {
      title: "매니아 발굴기 3",
      url: "/time/mania/3",
      imageUrl: "",
    },
    {
      title: "매니아 발굴기 4",
      url: "/time/mania/4",
      imageUrl: "",
    },
  ];

  return (
    <MainLayout title={'TIME X MUSIC'}>
      <NotYet title={'벗꽃이 피는 날 공개'}/>
      {/*<div className={styles.title__wrap}>*/}
      {/*  <p className={styles.title}>매니아 발굴기</p>*/}
      {/*  <Link href={'/time/mania'}>*/}
      {/*    <p className={styles.link}>전체보기</p>*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {/*<RowScroll listInfo={maniaListInfo} style={{ width: "148px" }} />*/}
    </MainLayout>
  )
}

export default TimePage;
