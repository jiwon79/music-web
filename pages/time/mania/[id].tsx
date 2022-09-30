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
          alt={"당시 사용했던 CD 판매 계정"}
          width={500}
          layout={"responsive"}
          height={378}
          objectFit="cover"
        />
        <p className={styles.caption}>당시 사용했던 CD 판매 계정</p>

        <div className={styles.video__container}>
          <iframe
            src="https://www.youtube.com/embed/s2VCmsGaAOc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
        </div>
        <p className={styles.caption}>기획에 참여했던 ‘한국사람’ 단독 공연 프리뷰 영상</p>

        <p className={styles.content__ques}>
          성덕을 넘어 덕업일치의 삶을 살고 계신 것 같아요. 처음엔 음감회를 기획했다고 하셨는데, 당시 상황들을 조금 더 자세히 설명해 주실 수 있을까요?
        </p>
        <p className={styles.content__ans}>
          음감회는 팬분들이 요가매트에 앉아 안대를 끼고 감상하는 컨셉으로 진행됐어요.
          아무래도 공연은 음악 감상보다 아티스트를 보는 것에 더 목적을 두고 있어요.
          그 점이 잘못됐다는 게 아니라, 그런 문화에서 벗어난 공연도 만들고 싶은 마음이 강했던 것 같아요.
          안대와 요가매트를 동원해서 아티스트보다 음악 자체에 몰입하게끔 분위기를 만들었어요.<br />
          그리고 사람의 기억에서 되게 오래 남는 것 중 하나가 ‘향’이라고 하잖아요.
          그날 팬분들이 느꼈던 감각들이 오래 기억됐으면 하는 마음에 인센스도 피웠어요.
          물론 휴대폰 사용도 금지였어요. 프라이빗한 공연이기도 했고,
          팬분들이 음악을 온전히 음미하는 데 방해될 수 있는 요인은 최대한 제거하려 했거든요.
        </p>

        <Image
          src={"/mania/mania_1_3.png"}
          alt={"음감회 현장 사진"}
          width={500}
          layout={"responsive"}
          height={378}
          objectFit="cover"
        />
        <p className={styles.caption}>음감회 현장사진</p>

        <div className={styles.video__container}>
          <iframe
            src="https://www.youtube.com/embed/FuFPYK4DmQY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
        </div>
        <p className={styles.caption}>음감회 프리뷰 영상</p>

        <p className={styles.content__ques}>
          공연에 요가매트와 안대라니, 듣기만 해도 너무 신선하네요. 또 기획해보고 싶은 공연이 있다면요?
        </p>
        <p className={styles.content__ans}>
          건 모든 공연기획자들의 꿈일 텐데(웃음), 제가 좋아하는 아티스트들을 모두 동원한 공연을 만들어보고 싶어요. 너무 교과서적인가요?
        </p>

        <p className={styles.content__ques}>
          혹시 모르죠. 정말 이뤄지는 날이 올지도! 예원 씨는 예술대학교에 다니시잖아요.
          학교에서 시도해 보고 싶은 공연도 있을 것 같은데요.
        </p>
        <p className={styles.content__ans}>
          음.. 학교에서 한다면 공연 기획보다는 뮤직비디오 제작을 해보고 싶어요.
          제가 생각하는 공연을 학교에서 구현해 내기에는 어려움이 큰 게 사실이라서요.
          저는 모쉬핏 문화를 좋아하는데, 이게 워낙 마이너한 문화라(웃음).
        </p>

        <p className={styles.content__ques}>
          뮤직비디오 너무 좋죠. 그러고 보면 예원 씨는 기존 형식에서 벗어나는 것들을 좋아하시는 것 같아요.
          ‘한국사람’ 음악도 그런 관점에서 좋아하시나요?
        </p>
        <p className={styles.content__ans}>
          그런 것 같아요. 저한테 ‘한국사람’ 음악은 모든 감정을 솔직하게 토해내는 것처럼 들리거든요.
          그런 솔직한 가사들이 제 마음을 대변해 주기도 하고,
          우울할 때마다 위로가 되어 줘서 더 애정이 가는 것 같아요.
          제 인생에 정말 많은 영향을 미친 사람 중 하나예요.
        </p>

        <p className={styles.content__ques}>
          (’한국사람’이 예원 씨의 삶에) 어떤 식으로 영향을 미쳤나요?
        </p>
        <p className={styles.content__ans}>
          공연에 대한 생각, 제 삶을 대하는 태도 모두를 바꿔놨어요.
          원래는 마냥 대중적인 공연을 하고 싶었는데, 그게 제가 진정으로 원하는 게 맞는지 의심하게 해줬어요.
          (진짜 원하는 게 무엇인지, 어떤 색깔의 기획자가 되고 싶은지 방향성을 잡게 해줬고,
          제가 사랑하는 것들을 계속 사랑해야 되겠다는 마음가짐을 갖게 해줬어요.)
          이런 이유 때문인지, 팬과 아티스트를 떠나서 인간 대 인간으로서 많이 존경하게 되는 것 같아요.
        </p>

        <Image
          src={"/mania/mania_1_4.png"}
          alt={"기획으로 참여했던 공연 현장사진"}
          width={500}
          layout={"responsive"}
          height={378}
          objectFit="cover"
        />
        <p className={styles.caption}>기획으로 참여했던 공연 현장사진</p>

        <p className={styles.content__title}>그가 바라보는 한국사람</p>

        <p className={styles.content__ques}>
          단지 ‘좋아함’을 떠나 꿈에 대한 확신을 줬다니, 더 특별하게 느껴지네요.
          ‘한국사람’만의 매력은 뭔가요?
        </p>
        <p className={styles.content__ans}>
          ‘한국사람’의 음악은 마이너한 언더 힙합 신에서도 메이저에 속해요.
          마이너한 것들을 선호하다보니 자연스레 접하게 됐는데,
          그 어디서도 들어보지 못한 독특함에 매료됐어요.<br />
          ’이런 게 있다고?’ 싶은 것들로 가득차있어요.(웃음)
          녹음하다 감정이 북받쳐 울먹이는 부분을 그대로 낸다든지..
          저는 양산형 음악을 지양하는 사람 중 한 명인데,
          한국사람은 그에 ‘반’하는 음악의 정점을 보여주는 느낌이에요.
          ‘날 것의 매력’이라고 표현해야 할까요
          뻔하지 않고 매번 새로워서 오래오래 좋아할 수 있기도 하고요.
        </p>

        <p className={styles.content__ques}>
          ‘한국사람’의 음악은 어떤 정서를 품고 있는지,
          그렇기에 어떤 성향의 리스너에게 추천하는지 궁금해요.
        </p>
        <p className={styles.content__ans}>
          ‘한국사람’ 음악은 일기장 같은 느낌이에요.
          감정에 솔직한 아티스트이기 때문에, 그게 가감 없이 다 묻어나요.
          그래서 인생을 살아가며 느낄 수 있는 복합적인 여러 정서들을 각 앨범마다 골고루 느낄 수 있어요.
          이 시기에는 얼마나 힘들었고, 이 시기에는 어떤 사랑을 했는지 등을 짐작할 수 있거든요.
          그렇기에 모든 앨범을 발매 순대로 들으시면서, 본인 취향의 앨범을 발견하는 재미를 느껴보시길 추천드려요.<br />
          범위를 좁혀보자면, 딥하고 마이너한 감성을 좋아하는 리스너 분들께 추천드리고,
          그중에서도 chill한 느낌을 선호한다면 {'<전설>'} 앨범을 1순위로 추천드립니다.
        </p>

        <p className={styles.content__ques}>
          한 명의 리스너로서, 음악이 가진 힘이 무엇이라고 생각하나요?
        </p>
        <p className={styles.content__ans}>
          ‘좋아하는 노래가 뭐야?’라고 물었을 때, 대답을 못하는 사람은 없다고 생각해요.
          그만큼 음악은 대중들에게 가장 보편화되어 있는 문화이고,
          쉽게 수식할 수 없는 대체 불가능한 힘을 지닌 것 같아요.
        </p>

        <p className={styles.content__ques}>
          저도 동감해요. 음악만큼 사람을 쉽게 움직일 수 있는 것은 없죠.
          그런만큼 아티스트뿐만 아니라 리스너가 가져야 하는 자세에 대한 얘기들도 많아지고 있는데요,
          예원씨는 ‘성숙한 리스너’라는 게 어떤 건지 고민해보신 적 있나요?
        </p>
        <p className={styles.content__ans}>
          제가 언더 힙합 신을 좋아하다 보니, 아티스트가 금전적으로 힘들어서 작업을 이어가지 못하는 경우를 종종 봤어요.
          그래서인지 ‘음악을 듣기만 해도 팬인가 vs 소비를 해야만 팬인가’라는 쟁점에 대해 나름대로 고민해본 적이 있어요.
          이건 가치관 차이이긴 한데, 저는 소비를 해야 한다고 생각하는 쪽이예요.
          팬의 소비는 아티스트에게 실질적인 원동력이 되어 더 발전된 음악을 만들 수 있도록 도움을 준다고 생각하거든요.<br />
          어떻게 보면 주식 같은 거예요. 좋은 음악을 듣고 싶은 만큼 투자하는 거죠.
          무리하지 않는 선에서, 음악을 사랑하는 만큼 성숙한 소비를 하는 것이 중요한 것 같아요.
        </p>

        <p className={styles.content__ques}>
          비교적 확고하게 생각을 가지고 계신 것 같아요.
          그런 예원씨가 앞으로 어떤 색깔의 공연을 만들어나갈지 궁금해집니다.<br />
          인터뷰이 분들께 드리는 마지막 공통 질문이 있는데요,
          ‘무언가를 좋아하면 잘하게 된다.’ or ’무언가를 잘하면 좋아하게 된다.’
          예원 씨는 어느 쪽에 속하는 사람인가요?
        </p>
        <p className={styles.content__ans}>
          전자요. 무언가를 좋아하면 그만큼 시간과 돈을 투자하게 되고,
          투자한 만큼 더 즐기게 되더라고요.
          참 신기한 게 주변에서 저의 즐기는 모습을 좋게 보는 사람이 하나둘 생겨났고,
          동시에 기회들이 찾아왔어요. 그렇게 점차 성장해 나가는 것 같아요.<br />
          지금처럼 좋아하는 것들을 계속 좋아하다 보면,
          더 재미있는 일들이 저를 찾아오지 않을까요? (표지)
        </p>
      </div>
    </MainLayout>
  );
}

export default ManiaDetailPage;
