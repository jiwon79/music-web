import MainLayout from "layout/MainLayout/MainLayout";
import styles from './detail.module.scss';
import Image from "next/image";

const ManiaDetailPage = () => {
  return (
    <MainLayout title={'매니아 발굴기'}>
      <div className={styles.title__wrap}>
        <Image
          src={"/mania/mania_1_1.png"}
          alt={"mania thumbnail"}
          width={480}
          height={480}
        />
        <p className={styles.title}>좋아하는 것을 마음껏 좋아하기</p>
      </div>
      <div className={styles.content__wrap}>
        <p>
          고동을 뭇 구하지 모래뿐일 예가 약동하다.
          동력은 따뜻한 청춘의 구하기 얼마나 타오르고
          위하여서, 과실이 크고 교향악이다. 보이는 가지에 유소년에게서 피는 물방아 주며, 사람은 청춘을
          그리하였는가? 튼튼하며, 않는 때까지 온갖
          방황하였으며, 충분히 청춘의 풍부하게 봄바람이다.<br />
          있는 이 이 따뜻한 때에, 현저하게 칼이다. 못하다
          것이 많이 있으랴? 노년에게서 같이, 뼈 청춘은
          봄바람을 불어 없으면 듣는다.
        </p>
      </div>
    </MainLayout>
  );
}

export default ManiaDetailPage;
