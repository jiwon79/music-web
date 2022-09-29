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

        <p className={styles.content__title}>좋아하는 것을 마음껏 좋아하기</p>
        <p className={styles.content__ques}>
          주변에서 ‘성덕’(성공한 덕후)로 불린다고 들었어요. 아티스트 분과 따로 아는 사이신가요?
        </p>
        <p className={styles.content__ans}>
          아! 10대 때부터 ‘한국사람’이라는 아티스트 분을 좋아했어요. 햇수로 따지면 5년째네요.
          ‘한국사람’ 노래는 페이스북이 한창 흥했을 때 우연히 언더래퍼 커뮤니티에서 접했어요.
          유명하지 않을 때부터 매번 SNS 라이브도 챙겨보고 앨범도 사다 보니 자연스레 저를 기억하셨나 봐요.
          그렇게 고독방(팬 단톡방)의 방장까지 되면서 아티스트 분과 연이 이어졌어요.
          지금은 일을 맡겨주기도 하시고요.
        </p>

        <p className={styles.content__ques}>
          정말 말 그대로 성덕이시네요(웃음). 일을 맡겨주셨다고 했는데, 어떤 일인지 여쭤봐도 될까요?
        </p>
        <p className={styles.content__ans}>
          공연기획자를 꿈꾸고 있어서 현재 예술경영 전공생으로 있어요.
          성(’한국사람’ 본명)님이 이걸 아시고, 피지컬 CD 판매 진행을 먼저 제안 주신 것이 첫 시작이에요.
          그 후, ‘한국사람’ 음감회도 기획하고 점점 딥한 일들을 맡게 되다가, 최근에는 단독 공연의 기획까지 맡게 됐어요.
          제가 제일 좋아하는 아티스트와 일이라니.. 솔직히 ‘이게 실화인가?’ 싶어요.
        </p>
        <Image
          src={"/mania/mania_1_2.png"}
          alt={"mania thumbnail"}
          width={500}
          layout={"responsive"}
          height={378}
          objectFit="cover"
        />
        <p className={styles.caption}>당시 사용했던 CD 판매 계정</p>
        <iframe
          width="480" height="315"
          src="https://www.youtube.com/embed/s2VCmsGaAOc"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
        </iframe>
        <p className={styles.caption}>기획에 참여했던 ‘한국사람’ 단독 공연 프리뷰 영상</p>
      </div>
    </MainLayout>
  );
}

export default ManiaDetailPage;
