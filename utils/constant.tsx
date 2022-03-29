import {questionType} from "./types";
import {ListenerTypeName} from "./enum";

export const questionList: Array<questionType> = [
  {
    question: '나는 출근길(등굣길)에 음악 앱을 켜서,',
    answers: [
      '자연스럽게 어제 듣던 플레이리스트를 재생한다.',
      '최신 음악, TOP100에서 골라 듣는다.'
    ],
    result: [
      [
        ListenerTypeName.CHERISH,
        ListenerTypeName.INNOCENT,
        ListenerTypeName.ANTIQUE,
        ListenerTypeName.BIZARRE,
        ListenerTypeName.TENDER,
        ListenerTypeName.SPONTANEOUS,
        ListenerTypeName.PUZZLING,
        ListenerTypeName.CANDID
      ],
      [
        ListenerTypeName.TENDER,
        ListenerTypeName.SPONTANEOUS,
        ListenerTypeName.PUZZLING,
        ListenerTypeName.CANDID,
      ]
    ]
  },
  {
    question: '다음 중 어떤 음악을 선호하는가?',
    answers: [
      '마음을 울리는 음악',
      '생각을 일깨워주는 음악',
    ],
    result: [
      [
        ListenerTypeName.CHERISH,
        ListenerTypeName.ANTIQUE,
        ListenerTypeName.TENDER,
        ListenerTypeName.SPONTANEOUS
      ],
      [
        ListenerTypeName.INNOCENT,
        ListenerTypeName.BIZARRE,
        ListenerTypeName.PUZZLING,
        ListenerTypeName.CANDID
      ]
    ]
  },
  {
    question: '나의 음악 취향을 정의내리는 기준에 더 가까운 쪽은?',
    answers: [
      '장르, 음색, 분위기',
      '감동, 가사, 울림',
    ],
    result: [
      [
        ListenerTypeName.ANTIQUE,
        ListenerTypeName.BIZARRE,
        ListenerTypeName.SPONTANEOUS,
        ListenerTypeName.PUZZLING
      ],
      [
        ListenerTypeName.CHERISH,
        ListenerTypeName.INNOCENT,
        ListenerTypeName.TENDER,
        ListenerTypeName.CANDID
      ]
    ]
  },
  {
    question: '누군가 나에게 인생곡이 뭐냐고 묻는다.',
    answers: [
      '다양해서 어떤 곡을 말해야 할지 망설여진다.',
      '곧바로 어느 아티스트의 어떤 곡인지 대답할 수 있다.',
    ],
    result: [
      [
        ListenerTypeName.TENDER,
        ListenerTypeName.SPONTANEOUS,
        ListenerTypeName.PUZZLING,
        ListenerTypeName.CANDID
      ],
      [
        ListenerTypeName.CHERISH,
        ListenerTypeName.INNOCENT,
        ListenerTypeName.ANTIQUE,
        ListenerTypeName.BIZARRE
      ]
    ]
  },
  {
    question: '내가 인생곡을 만난 상황과 비슷한 것은?',
    answers: [
      '예상치 못한 상황에서 우연히(영화나 드라마의 OST, 길거리에서 흘러나오는 노래, 친구가 듣고 있었던 노래 등)',
      '내 취향의 음악들을 파도타기 하다가 발견. 유레카!',
    ],
    result: [
      [
        ListenerTypeName.TENDER,
        ListenerTypeName.SPONTANEOUS,
        ListenerTypeName.PUZZLING,
        ListenerTypeName.CANDID
      ],
      [
        ListenerTypeName.CHERISH,
        ListenerTypeName.INNOCENT,
        ListenerTypeName.ANTIQUE,
        ListenerTypeName.BIZARRE
      ]
    ]
  },
  {
    question: '내가 아티스트에게 빠지는 포인트는?',
    answers: [
      '무대의 프로페셔널하고 빛나는 모습',
      '무대 뒤 인간적이고 솔직한 모습',
    ],
    result: [
      [
        ListenerTypeName.CANDID,
        ListenerTypeName.ANTIQUE,
        ListenerTypeName.SPONTANEOUS,
        ListenerTypeName.PUZZLING
      ],
      [
        ListenerTypeName.INNOCENT,
        ListenerTypeName.BIZARRE,
        ListenerTypeName.TENDER,
        ListenerTypeName.CANDID
      ]
    ]
  },
  {
    question: '좋아하는 음악을 즐기는 방법은?',
    answers: [
      'CD, LP 등을 수집하거나 비하인드를 찾아보는 등 혼자 즐겨도 충분하다.',
      '리뷰창이나 유튜브 댓글창에서 같은 취향을 가진 사람들과 생각을 공유하며 더욱 즐겁다.',
    ],
    result: [
      [
        ListenerTypeName.CHERISH,
        ListenerTypeName.INNOCENT,
        ListenerTypeName.ANTIQUE,
        ListenerTypeName.BIZARRE
      ],
      [
        ListenerTypeName.TENDER,
        ListenerTypeName.SPONTANEOUS,
        ListenerTypeName.PUZZLING,
        ListenerTypeName.CANDID
      ]
    ]
  },
  {
    question: '끊임없이 새로운 음악들이 창작되는 세상에서',
    answers: [
      '이미 나와 있는 음악들로도 즐기기엔 충분하다.',
      '앞으로 새로 나올 음악들이 기대된다.',
    ],
    result: [
      [
        ListenerTypeName.CHERISH,
        ListenerTypeName.INNOCENT,
        ListenerTypeName.ANTIQUE,
        ListenerTypeName.BIZARRE
      ],
      [
        ListenerTypeName.TENDER,
        ListenerTypeName.SPONTANEOUS,
        ListenerTypeName.PUZZLING,
        ListenerTypeName.CANDID
      ]
    ]
  }
];

export const listenerTypeMap = {
  'cherish': {
    type: 'cherish',
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
        youtube: 'https://youtu.be/G2T-XBJg3pg',
      },
      {
        title: '네가 사랑한 것들을 기억할게',
        artist: '알레프',
        youtube: 'https://youtu.be/gwtC4Ovh7bM',
      },
      {
        title: 'Catching Feelings',
        artist: 'Justin Bieber',
        youtube: 'https://youtu.be/axyfEusEuho',
      },
      {
        title: 'Bad Day',
        artist: 'Daniel Powter',
        youtube: 'https://youtu.be/gH476CxJxfg',
      }
    ]
  },
  'innocent': {
    type: 'innocent',
    name: '이노센트',
    description: '음악을 통찰하며 성장하는 유형',
    keywords: ['위안', '재발견', '상상의 나래'],
    listenMusic: [
      '가사에 담긴 깊은 뜻을 되새겨요.',
      '순결하고 때 묻지 않은 느낌을 선호해요.',
      '원곡자가 표현한 느낌을 정확히 전달받고자 귀 기울여요.',
    ],
    findMusic: [
      '복잡한 마음을 차분히 가라앉히고 싶을 때',
      '리프레쉬하며 영감을 얻고 싶을 때',
      '생각에 깊이 잠기고 싶을 때',
    ],
    enjoyMusic: [
      '노래를 들으며 떠오르는 것들을 기록해요.',
      '가사 해석을 함께 찾아봐요.',
      '듣고 또 듣고 반복 재생해요.',
    ],
    recommend: [
      {
        title: '내 마음에 비친 내 모습',
        artist: '유재하',
        youtube: 'https://youtu.be/aIWOBFyGQDs',
      },
      {
        title: 'Where Is The Love?',
        artist: 'Black Eyed Peas',
        youtube: 'https://youtu.be/WpYeekQkAdc',
      },
      {
        title: 'There She Goes',
        artist: 'The La’s',
        youtube: 'https://youtu.be/eu2iv-vMKT8',
      },
      {
        title: 'I Always Wanna Die (Sometimes)',
        artist: 'The 1975',
        youtube: 'https://youtu.be/k0Z6IxOeuMk',
      },
    ]
  },
  'antique': {
    type: 'antique',
    name: '앤티큐어',
    description: '음악을 활용한 분위기 형성을 즐기는 유형',
    keywords: ['낭만', '조화', '만족'],
    listenMusic: [
      '조화로운 악기 소리에 집중해요.',
      '고전적이고 우아한 느낌을 선호해요.',
      '음악의 완성도를 평가하는 나만의 기준이 명확해요.',
    ],
    findMusic: [
      '멋스러운 분위기를 형성하고 싶을 때',
      '소리가 풍성한 공간에서 휴식을 취할 때',
      '평범한 순간도 특별히 보내고 싶을 때',
    ],
    enjoyMusic: [
      'LP 플레이어를 활용해 특유의 분위기를 연출해요.',
      '공간감이 좋은 스피커와 함께라면 더욱 좋아요.',
      '나도 모르게 리듬을 타고 있어요.',
    ],
    recommend: [
      {
        title: '무대 위에',
        artist: '낯선사람들',
        youtube: 'Miles Davis',
      },
      {
        title: 'Rubbrrband of Life(feat. Ledisi)',
        artist: 'Miles Davis',
        youtube: 'https://youtu.be/YybPNmPJwrw',
      },
      {
        title: 'In Too Deep(feat. Kiana Ledé)',
        artist: 'Jacob Collier',
        youtube: 'https://youtu.be/e1kqcM2ywNM',
      },
      {
        title: 'Better Than I Imagined(feat. H.E.R., Meshell Ndegeocello)',
        artist: 'Robert Glasper',
        youtube: 'https://youtu.be/8yQE8v-5GTU',
      },
    ]
  },
  'bizarre': {
    type: 'bizarre',
    name: '비자르',
    description: '전시 작품을 감상하듯 음악을 대하는 유형',
    keywords: ['여운', '동경', '회고'],
    listenMusic: [
      '곡조에 담긴 의미를 발견하면 희열을 느껴요.',
      '대중성보다는 독특한 개성을 선호해요.',
      '아티스트의 꾸며내지 않은 담담한 표현력에 스며들어요.',
    ],
    findMusic: [
      '예술적인 감각을 기르고 싶을 때',
      '신비로운 작품을 마주한 신선함을 느끼고 싶을 때',
      '어떤 것으로도 쉽게 채워지지 않는 공허함이 몰려올 때',
    ],
    enjoyMusic: [
      '노래의 탄생 비화나 비하인드 스토리를 함께 찾아봐요.',
      '혼자서 이어폰 끼고 차분히 듣는 게 최고예요.',
      '그 곡이 수록된 전체 앨범을 들어보며 흐름을 파악해 봐요.',
    ],
    recommend: [
      {
        title: 'Champagne Supernova',
        artist: 'Oasis',
        youtube: 'https://youtu.be/tI-5uv4wryI',
      },
      {
        title: 'You Sent Me Flying / Cherry',
        artist: 'Amy Winehouse',
        youtube: 'https://youtu.be/o1vwoIE1HkY',
      },
      {
        title: 'Hard Feelings/Loveless',
        artist: 'Lorde',
        youtube: 'https://youtu.be/XRNSan20Wpw',
      },
      {
        title: '2009',
        artist: 'Mac Miller',
        youtube: 'https://youtu.be/6B3YwcjQ_bU',
      },
    ]
  },
  'tender': {
    type: 'tender',
    name: '텐더',
    description: '음악을 통해 에너지를 충전하는 유형',
    keywords: ['공감', '설렘', '친근'],
    listenMusic: [
      '누군가가 다독여주는 기분이 들어요.',
      '희망차고 밝은 느낌을 선호해요.',
      '아티스트가 표현하는 감정에 동화돼요.',
    ],
    findMusic: [
      '무언가 망설이는 나를 위한 다정한 주문이 필요할 때',
      '벅찬 감정을 느끼고 싶을 때',
      '누군가 내 마음을 헤아려 줬으면 할 때',
    ],
    enjoyMusic: [
      '가사에 공감하며 듣는 재미가 있어요.',
      '비슷한 느낌의 곡들이 모여 있는 플레이리스트를 자주 들어요.',
      '노래뿐만 아니라 아티스트에게도 애틋함이 생겨요.',
    ],
    recommend: [
      {
        title: 'Unlucky',
        artist: 'IU',
        youtube: 'https://youtu.be/2vGoriQuLmc',
      },
      {
        title: '영화처럼',
        artist: '마치',
        youtube: 'https://youtu.be/zTWOR8dJWoU',
      },
      {
        title: 'Nothing',
        artist: 'Jeremy Passion',
        youtube: 'https://youtu.be/wQeNczbT6nw',
      },
      {
        title: 'Unbreakable Smile',
        artist: 'Tori Kelly',
        youtube: 'https://youtu.be/9JknQ7XwDvE',
      },
    ]
  },
  'spontaneous': {
    type: 'spontaneous',
    name: '스폰태니어',
    description: '음악이 주는 원초적인 기쁨을 만끽하는 유형',
    keywords: ['기쁨', '환상', '자극'],
    listenMusic: [
      '음악과 하나 된 기분이 들어요.',
      '마음이 풍성해지는 느낌을 선호해요.',
      '음악은 나를 웃음 짓게 만드는 마법 같아요.',
    ],
    findMusic: [
      '내면의 흥을 돋우고 싶을 때',
      '두 귀가 허전할 때',
      '친한 사람들과 즐거운 시간을 보낼 때',
    ],
    enjoyMusic: [
      '노래방에서 질러줘야죠.',
      '춤을 추거나 직접 연주하는 재미도 빼놓을 수 없어요.',
      '라이브 영상을 찾아보거나, 공연을 보러 자주 다녀요.',
    ],
    recommend: [
      {
        title: 'Euphoria',
        artist: 'BTS',
        youtube: 'https://youtu.be/cgGZInK2l64',
      },
      {
        title: '달빛소년',
        artist: '체리필터',
        youtube: 'https://youtu.be/EapUSbnsIws',
      },
      {
        title: 'Acid Dreams',
        artist: 'MAX',
        youtube: 'https://youtu.be/KuFpVjJoogw',
      },
      {
        title: 'Leave Before You Love Me',
        artist: 'Marshmello x Jonas Brothers',
        youtube: 'https://youtu.be/hmUyEDG7Jy0',
      },
    ]
  },
  'puzzling': {
    type: 'puzzling',
    name: '퍼즐링',
    description: '음악 트렌드 습득에 뛰어난 감각적인 유형',
    keywords: ['다채로움', '호기심', '감탄'],
    listenMusic: [
      '새로움과 신선함을 추구해요.',
      '젊고 힙한 느낌을 선호해요.',
      '자신의 색이 짙은 아티스트들을 높이 평가해요.',
    ],
    findMusic: [
      '요즘 뜨는 트렌드를 확인하고 싶을 때',
      '무료한 일상, 혹은 정신없는 일상에서 환기가 필요할 때',
      '남다른 감각을 느끼고 싶을 때',
    ],
    enjoyMusic: [
      '창작자의 의도를 파악하면 더욱 재밌어요.',
      '다른 사람들과 감상평을 공유하는 편이에요.',
      '시각적인 것(아트워크, 뮤직비디오)과 잘 매치되어 있는 것에 흥미를 느껴요.',
    ],
    recommend: [
      {
        title: 'YOUTH! (feat. HAON, Coogie, BewhY)',
        artist: 'BOYCOLD',
        youtube: 'https://youtu.be/TB_vkcVO0FE',
      },
      {
        title: '아껴줄게 (Prod. L-like)',
        artist: '죠지, SUMIN',
        youtube: 'https://youtu.be/OaDKuFfkSMI',
      },
      {
        title: 'Chosen(feat. Ty Dolla $ign)',
        artist: 'Blxst',
        youtube: 'https://youtu.be/kUhHdASVjGs',
      },
      {
        title: 'Under',
        artist: 'Mac Ayres',
        youtube: 'https://youtu.be/MJuRw5XEzAg',
      },
    ]
  },
  'candid': {
    type: 'candid',
    name: '캔디드',
    description: '음악과 함께 진솔해질 수 있는 유형',
    keywords: ['배부름', '생각 정리', '안정'],
    listenMusic: [
      '담백하면서도 귀감이 되는 가사를 좋아해요.',
      '가공되지 않은 원석의 느낌을 선호해요.',
      '어떠한 표현보다도 아티스트가 꾹꾹 눌러담은 진정성에 주목해요.',
    ],
    findMusic: [
      '버스 창 너머로 지는 노을을 바라볼 때',
      '예상치 못한 데서 고민의 해답을 찾고 싶을 때',
      '솔직한 나의 생각과 감정을 마주하고 싶을 때',
    ],
    enjoyMusic: [
      '되도록이면 여유로운 환경에서 챙겨 들어요.',
      '표현된 울림 그대로를 흡수하려 해요.',
      '영상은 필수가 아니에요. 듣는 것만으로도 충분해요.',
    ],
    recommend: [
      {
        title: '꿈과 책과 힘과 벽',
        artist: '잔나비',
        youtube: 'https://youtu.be/SJUWooZnfVQ',
      },
      {
        title: '공드리(feat. 김예림)',
        artist: '프라이머리, 오혁',
        youtube: 'https://youtu.be/Ve-hW0eCnKQ',
      },
      {
        title: 'Strawberries & Cigarettes',
        artist: 'Troye Sivan',
        youtube: 'https://youtu.be/Mw5mAozjC6M',
      },
      {
        title: '2 Soon',
        artist: 'keshi',
        youtube: 'https://youtu.be/5AoPgDB4LcM',
      },
    ]
  },
}
