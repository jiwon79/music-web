import {questionType} from "../types";
import {ResultStandard} from "./enums";
import {FestivalType, IRecommendFestivalType} from "./type";

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

export const festivalTypeMap: Record<string, FestivalType> = {
  '1': {
    id: 1,
    name: '헤벌쭉캐',
    standards: ['차분', '자유로움', '분위기'],
    descriptions: [
      '제대로 된 여유를 즐길 줄 아는 당신!\n페스티벌에서 ‘헤벌쭉캐’를 맡고 있습니다.',
      '분명한 목적을 가지고 페스티벌에 가기 보다, 자유로운 분위기를 맞이하는 것 자체로 만족스러워해요.',
      '페스티벌 시작 시간에 맞춰 일찍 출발하기 보다, 좋아하는 아티스트 등장 시간에 맞춰 느긋하게 입장하곤 해요.',
      '좋아하는 아티스트에 대한 덕심을 겉으로 티 내지 않는 편이라, 주변에서 \'너 이 노래 어떻게 알아?\'와 같은 질문들을 종종 받아요.',
    ]
  },
  '2': {
    id: 2,
    name: '둥가둥가 엄마캐',
    standards: ['차분', '계획', '분위기'],
    descriptions: [
      '친구들이 의지하게 되는 엄마 같은 당신! 페스티벌에서 ‘둥가둥가 엄마포지션캐’를 맡고 있습니다.',
      '페스티벌 전 날 부스, 준비물, 교통 편(셔틀버스) 등을 미리 조사해서 친구들에게 공유해 줄 때가 많아요.',
      '돗자리 지박령처럼 자리를 지키고 있다가 친구가 돌아오면 먹을거리를 챙겨주곤 해요. (\'엥뿌삐캐\'가 무조건 잡아야 하는 유형)',
      '무대도 좋지만 페스티벌이 주는 분위기를 더 좋아하기 때문에 다른 유형들보다 부스 시설과 먹거리에 큰 관심을 보여요.',
    ],
  },
  '3': {
    id: 3,
    name: '내가수 호위무사캐',
    standards: ['차분', '계획', '덕심'],
    descriptions: [
      '차분하지만 치밀하게 덕질하는 당신! 페스티벌에서 ‘내가수 호위무사캐\'를 맡고 있습니다.',
      '라인업에 내가수가 뜨는 순간, 티켓팅 성공을 위한 계획을 짜기 시작해요.',
      '내가수가 등장하기 전까지는 체력과 핸드폰 배터리를 최대한 아껴둬요. (중간에 영상이 끊기면 안 되니까, 미리 저장 공간 확보해두는 센스까지!)',
      '내가수가 등장하는 순간 기쁨을 주체할 수 없지만, 손에 들린 직캠은 흔들림이 없어야 해요.',
    ]
  },
  '4': {
    id: 4,
    name: '엥뿌삐캐',
    standards: ['활발', '자유로움', '분위기'],
    descriptions: [
      '친구따라 갔지만 막상 가면 제일 신나게 노는 당신! 페스티벌에서 ‘엥뿌삐식 덕질캐\'를 맡고 있습니다.',
      '페스티벌 라인업이 뜨면 그 누구보다 호들갑을 떨지만, 막상 예매하려니 귀찮네요. (심지어 그 예매도 친구가 해줌.)',
      '잘 모르는 노래에도 자신만만하게 더블링을 넣어요.',
      '슬슬 페스티벌이 끝나갈 때쯤 세상이 무너질 듯 아쉬워해요.',
      '(+ ‘둥가둥가 엄마포지션캐’와 함께 페스티벌을 즐기길 추천합니다!)',
    ]
  },
  '5': {
    id: 5,
    name: '실속만 챙기는 덕후캐',
    standards: ['활발', '자유로움', '덕심'],
    descriptions: [
      '활발하고 자유로우며 덕심도 있는 당신! 페스티벌에서 ‘실속만 챙기는 덕후캐\'를 맡고 있습니다.',
      '아티스트를 보는 것도 중요하지만, 함께 간 사람들과 즐기는 시간도 중요해요.',
      '무대를 보며 전곡을 다 따라 부를 수 있을 만큼 애정이 있더라도, 거금을 들여가며 덕질하는 편은 아니에요. (귀여운 통장 잔고...)',
      '무대를 보는 것에만 시간을 쓰지 않고, 페스티벌 곳곳을 돌아다니며 뽕을 뽑아요.',
    ]
  },
  '6': {
    id: 6,
    name: '좋아요캐',
    standards: ['활발', '계획', '분위기'],
    descriptions: [
      '페스티벌에 입장하는 순간 셔터부터 누르는 당신! 페스티벌에서 ‘좋아요캐\'를 맡고 있습니다.',
      '페스티벌을 핫플의 성지로 생각해요. (특히 인스타에서 잘 먹힘)',
      '어딜 가든 사진 남기는 걸 중요시하기 때문에, 포토존을 그냥 지나치는 건 도저히 용납할 수 없어요.',
      '무대를 즐기는 중간중간, 인스타 피드에 올릴 사진을 정리해요.',
    ]
  },
  '7': {
    id: 7,
    name: '찐광기캐',
    standards: ['활발', '계획', '덕심'],
    descriptions: [
      '활발하고 계획적이며 덕질에 진심인 당신! 페스티벌에서 ‘찐광기캐\'를 맡고 있습니다.',
      '페스티벌을 내가수 덕질의 일환으로 생각해요. ',
      '땡볕에서 살아남기 위해 전날부터 물을 얼려두는 준비성.',
      '스탠딩 1열 사수를 위해서라면 꼭두새벽부터 나서기 SSAP 가능.',
    ]
  }
}

export const recommendFestivalList: IRecommendFestivalType[] = [
  {
    image_url: "/game/festival/festival_1.png",
    title: "2022 RESFFECT FESTIVAL",
    desc: "Real Sound Effect, RESFFECT!",
    time: "2022.08.27.(토) ~ 2022.08.28.(일)",
  },
  {
    image_url: "/game/festival/festival_2.png",
    title: "RAPBEAT 2022",
    desc: "토,일 양일간 국내 최다 라인업이 출연하는 힙합 페스티벌 ‘랩비트’!",
    time: "2022.09.03.(토) ~ 2022.09.04.(일)",
  },
  {
    image_url: "/game/festival/festival_3.png",
    title: "HIPHOPPLAYA FESTIVAL 2022",
    desc: "한국을 대표하는 최대 규모의 야외 힙합 페스티벌 ‘힙플페'!",
    time: "2022.09.17.(토) ~ 2022.09.18.(일)",
  },
  {
    image_url: "/game/festival/festival_4.png",
    title: "레인보우 뮤직&캠핑 페스티벌 2022",
    desc: "아름다운 자라섬에 감성이 물들어가는 9월. 달콤한 음악과 낭만, 캠핑이 함께하는 ‘레인보우 페스티벌 2022’이 찾아옵니다.",
    time: "2022.09.17.(토) ~ 2022.09.18.(일)",
  },
  {
    image_url: "/game/festival/festival_5.png",
    title: "2022 부산국제록페스티벌",
    desc: "2022년 제23회를 맞는 국내 최장수 록페스티벌, ‘부산국제록페스티벌'!",
    time: "2022.10.01.(토) ~ 2022.10.02.(일)",
  },
  {
    image_url: "/game/festival/festival_6.png",
    title: "19회 자라섬재즈페스티벌 - 가평",
    desc: "자라가 바라보는 섬, 세계지도 위에 한국의 재즈를 그리다, ‘자라섬재즈페스티벌'!",
    time: "2022.10.01.(토) ~ 2022.10.03.(월)",
  },
]