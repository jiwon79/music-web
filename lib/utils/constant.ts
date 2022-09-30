import { LinkItemProps } from "components/common/LinkItem/LinkItem";

const BASE_URL: string = 'https://illusion-0.vercel.app';

const homePlayListInfo: LinkItemProps[] = [
  {
    title: '음악 제목 01',
    url: '#001',
  },
  {
    title: '음악 제목 02',
    url: '#002',
  },
  {
    title: '음악 제목 03',
    url: '#003',
  },
  {
    title: '음악 제목 04',
    url: '#004',
  },
  {
    title: '음악 제목 05',
    url: '#005',
  },
];

const homeGameListInfo: LinkItemProps[] = [
  {
    title: '리스터 타입',
    url: '/game/listener',
    imageUrl: '',
  },
  {
    title: '페스티벌 게임',
    url: '/game/festival',
    imageUrl: '',
  },
];

export { BASE_URL, homePlayListInfo, homeGameListInfo }
