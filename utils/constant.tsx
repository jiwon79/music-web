import {questionType, listenerType} from "./types";

export const questionList: Array<questionType> = [
  {
    question: '나는 출근길(등굣길)에 음악 앱을 켜서,',
    answers: [
      '자연스럽게 어제 듣던 플레이리스트를 재생한다.',
      '최신 음악, TOP100에서 골라 듣는다.'
    ]
  },
  {
    question: '다음 중 어떤 음악을 선호하는가?',
    answers: [
      '마음을 울리는 음악',
      '생각을 일깨워주는 음악',
    ]
  },
  {
    question: '나의 음악 취향을 정의내리는 기준에 더 가까운 쪽은?',
    answers: [
      '장르, 음색, 분위기',
      '감동, 가사, 울림',
    ]
  },
  {
    question: '누군가 나에게 인생곡이 뭐냐고 묻는다.',
    answers: [
      '다양해서 어떤 곡을 말해야 할지 망설여진다.',
      '곧바로 어느 아티스트의 어떤 곡인지 대답할 수 있다.',
    ]
  },
  {
    question: '내가 인생곡을 만난 상황과 비슷한 것은?',
    answers: [
      '예상치 못한 상황에서 우연히(영화나 드라마의 OST, 길거리에서 흘러나오는 노래, 친구가 듣고 있었던 노래 등)',
      '내 취향의 음악들을 파도타기 하다가 발견. 유레카!',
    ]
  },
  {
    question: '내가 아티스트에게 빠지는 포인트는?',
    answers: [
      '무대의 프로페셔널하고 빛나는 모습',
      '무대 뒤 인간적이고 솔직한 모습',
    ]
  },
  {
    question: '좋아하는 음악을 즐기는 방법은?',
    answers: [
      'CD, LP 등을 수집하거나 비하인드를 찾아보는 등 혼자 즐겨도 충분하다.',
      '리뷰창이나 유튜브 댓글창에서 같은 취향을 가진 사람들과 생각을 공유하며 더욱 즐겁다.',
    ]
  },
  {
    question: '끊임없이 새로운 음악들이 창작되는 세상에서',
    answers: [
      '이미 나와 있는 음악들로도 즐기기엔 충분하다.',
      '앞으로 새로 나올 음악들이 기대된다.',
    ]
  }
];

export const listenerTypeList: Array<listenerType> = [
  {
    name: '체리쉬',
    description: '음악이 지닌 소중한 가치를 깨우치는 유형',
    keywords: ['편안', '따뜻', '소확행'],
    listenMusic: [
      '감동을 주는 표현들을 마음에 간직해요.',
      '귀에 익은 선율이 주는 안정된 느낌을 선호해요.',
      '시간이 흐를수록 그 음악이 지닌 가치가 견고해짐을 느껴요.',
    ],
    findMusic: [
      '기분 좋은 날씨에 적당한 바람이 살랑일 때',
      '익숙함에 가려진 소중함을 느끼고 싶을 때',
      '불안한 기운이 엄습해 안정을 되찾고 싶을 때',
    ],
    enjoyMusic: [
      'CD, LP 등을 차곡차곡 수집해요.',
      '대놓고 드러내진 않더라도 진심을 다해 아티스트를 응원해요.',
      '비슷한 느낌을 주는 또 다른 노래가 있나 찾아보기도 해요.',
    ],
    recommend: [
      {
        title: '그대와 영원히',
        artist: '이문세',
        youtube: 'https://www.youtube.com/watch?v=YY54m0w0aYY',
      },
      {
        title: '네가 사랑한 것들을 기억할게',
        artist: '알레프',
        youtube: 'https://www.youtube.com/watch?v=gwtC4Ovh7bM',
      },
      {
        title: 'Catching Feelings',
        artist: 'Justin Bieber',
        youtube: 'https://www.youtube.com/watch?v=axyfEusEuho',
      },
      {
        title: 'Bad Day',
        artist: 'Daniel Powter',
        youtube: 'https://www.youtube.com/watch?v=gH476CxJxfg',
      }
    ]
  },
  {
    name: '',
    description: '',
    keywords: [
      '',
      '',
      '',
    ],
    listenMusic: [
      '',
      '',
      '',
    ],
    findMusic: [
      '',
      '',
      '',
    ],
    enjoyMusic: [
      '',
      '',
      '',
    ],
    recommend: [
      {
        title: '',
        artist: '',
        youtube: '',
      },
      {
        title: '',
        artist: '',
        youtube: '',
      },
      {
        title: '',
        artist: '',
        youtube: '',
      },
      {
        title: '',
        artist: '',
        youtube: '',
      },
    ]
  }
]
