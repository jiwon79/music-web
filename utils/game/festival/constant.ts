import {questionType} from "./type";
import {ResultStandard} from "./enums";

export const questionList: Array<questionType> = [
  {
    question: '대망의 페스티벌 D-Day! 당신은 어떤 옷을 고를 것인가?',
    answers: [
      '언제든 뛰어 놀 준비가 되어 있는 편안한 옷차림',
      '페스티벌은 사진이지! 샤랄라한 꾸꾸꾸룩',
    ],
    result: [
      [ResultStandard.LIVELY, ResultStandard.FREE, ResultStandard.OTAKU],
      [ResultStandard.CALM, ResultStandard.PLAN, ResultStandard.MOOD],
    ]
  },
  {
    question: '친구(연인)가 어떤 좌석이 더 좋은지 물어본다. 이때 당신의 대답은?',
    answers: [
      '페스티벌은 여유로운 맛이지~ 자유롭게 돌아다닐 수 있는 돗자리존!',
      '내가 이 라인업을 언제 이렇게 가까이서 보겠어! 무조건 스탠딩!',
    ],
    result: [
      [ResultStandard.CALM, ResultStandard.FREE, ResultStandard.MOOD],
      [ResultStandard.LIVELY, ResultStandard.PLAN, ResultStandard.OTAKU],
    ]
  },
  {
    question: '페스티벌 장소에 도착했다. 들뜬 마음으로 입장한 당신이 가장 기다리는 것은?',
    answers: [
      '시원한 맥주, 예쁜 포토존, 선선한 바람. 생각만 해도 설레는 페스티벌의 분위기!',
      '다 필요 없고 최애의 무대!',
    ],
    result: [
      [ResultStandard.CALM, ResultStandard.FREE, ResultStandard.MOOD],
      [ResultStandard.LIVELY, ResultStandard.PLAN, ResultStandard.OTAKU],
    ]
  },
  {
    question: '(돗자리&좌석) 공연이 시작됐다. 당신은 자리에 앉아 무대를 즐기고 있다. 그때 친구가 다른 부스를 구경하러 가자고 한다. 이때 당신의 대답은?',
    answers: [
      '그래, 페스티벌에 왔는데 뽕 뽑아야지. 돌아다니면서도 노래는 들을 수 있으니까!',
      '음.. 그런 건 쉬는 시간에 잠깐 다녀오는 게 어때? 나는 무대에 집중하고 싶어서.',
    ],
    result: [
      [ResultStandard.LIVELY, ResultStandard.FREE, ResultStandard.MOOD],
      [ResultStandard.CALM, ResultStandard.PLAN, ResultStandard.OTAKU],
    ]
  },
  {
    question: '(스탠딩) 당신은 지금 스탠딩 4열에서 인파 속에 끼여 있다. 가장 보고 싶었던 아티스트의 무대는 끝난 상황. 그런데 다다음 무대에 평소 조금씩 즐겨 듣던 아티스트가 나온다고 한다. 이때 당신의 행동은?',
    answers: [
      '가까이서 보면 좋기야 하겠지만 최애 무대를 봤으니 이젠 뒷자리로 가서 여유롭게 즐길래.',
      '다리는 좀 아프지만 이왕 여기까지 온 거 그 무대까지만 보고 가야지! \n' +
      '(체력은 좀 딸리지만 그냥 가기엔 아쉬워!)'
    ],
    result: [
      [ResultStandard.CALM, ResultStandard.FREE, ResultStandard.MOOD],
      [ResultStandard.LIVELY, ResultStandard.PLAN, ResultStandard.OTAKU],
    ]
  },
  {
    question: '이제 슬슬 배가 고프다. 음식을 사러 FnB 존에 갔더니 먹고 싶은 메뉴에는 줄이 너무 길다. 이런 상황에서 어떻게 할 것인가?',
    answers: [
      '배만 채우면 되지 메뉴가 뭐가 중요해. 배고프니까 아무거나 먹을래!',
      '맛있는 음식도 페스티벌의 일부! 아무리 줄이 길어도 먹고 싶은 걸 먹어야겠어.',
    ],
    result: [
      [ResultStandard.FREE, ResultStandard.OTAKU],
      [ResultStandard.PLAN, ResultStandard.MOOD],
    ]
  },
  {
    question: '기다리고 기다리던 최애가 등장했다. 당신이 그의 공연을 즐기는 방법은?',
    answers: [
      '집에 가서 여러번 돌려봐야 해. 팔이 떨어지는 한이 있어도 끝까지 다 찍을 거야.',
      '찍어두는 것도 좋지만, 내 두 눈에 최애를 담는 게 더 중요해.',
    ],
    result: [
      [ResultStandard.PLAN],
      [ResultStandard.FREE],
    ]
  },
  {
    question: '최애가 잠시 물을 마신다. 이때 나의 행동은?',
    answers: [
      '적막을 깨며 냅다 사랑고백을 한다.',
      '최애의 모습을 조용히 구경한다.',
    ],
    result: [
      [ResultStandard.LIVELY, ResultStandard.FREE],
      [ResultStandard.CALM, ResultStandard.PLAN],
    ]
  },
  {
    question: '점점 무르익어 가는 공연의 열기. 동시에 가까워져 오는 막차 시간. 이때 당신의 심경은?',
    answers: [
      '자꾸만 시간을 확인하게 되고, 쪼달리기 시작한다.',
      '나는 오늘만 산다. 냅다 앵콜 외쳐!',
    ],
    result: [
      [ResultStandard.CALM, ResultStandard.PLAN],
      [ResultStandard.LIVELY, ResultStandard.FREE],
    ]
  },
  {
    question: '아티스트가 내 폰을 가져가서 영상을 찍어줬다. 아래 보기 중 당신은?',
    answers: [
      '동네방네 자랑해야지~',
      '희소성 있는 거니까 가까운 주변 친구들에게만 보여주고 공개된 곳에는 업로드하지 않는다',
    ],
    result: [
      [ResultStandard.LIVELY, ResultStandard.FREE],
      [ResultStandard.CALM, ResultStandard.PLAN],
    ]
  },
]
