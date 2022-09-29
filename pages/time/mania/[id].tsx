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
        <div className={styles.summary}>
          <p>
            <b>❤️‍🔥 “지금 내가 사랑하는 것들을 앞으로도 사랑해야겠다는 마음을 가지게 해줬어요.”</b><br /><br />
            자신이 사랑하는 것들을 지키기 위해 노력하는 20대 대학생을 만나보았다.<br />
            그는 10대 때부터 공연을 사랑해왔고, 지금은 자신이 가장 좋아하는 아티스트와 함께 일하는 삶을 살고 있다.<br />
            그의 이야기는 미래를 위해 습관처럼 현재를 포기하며 살아왔던 우리 스스로에게 물음표를 던지게 한다.
          </p>
          <div className={styles.gradient} />

        </div>
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
