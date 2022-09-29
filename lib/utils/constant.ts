import { ScrollItemProps } from "components/common/RowScrollItem/RowScrollItem";

const BASE_URL: string = 'https://illusion-0.vercel.app';

const homePlayListInfo: ScrollItemProps[] = [
  {
    title: '음악 제목 01',
    url: '#001',
    imageUrl: '',
  },
  {
    title: '음악 제목 02',
    url: '#002',
    imageUrl: '',
  },
  {
    title: '음악 제목 03',
    url: '#003',
    imageUrl: '',
  },
  {
    title: '음악 제목 04',
    url: '#004',
    imageUrl: '',
  },
  {
    title: '음악 제목 05',
    url: '#005',
    imageUrl: '',
  },
];

const homeGameListInfo: ScrollItemProps[] = [
  {
    title: '리스터 타입',
    url: '#001',
    imageUrl: '',
  },
  {
    title: '페스티벌 게임',
    url: '#002',
    imageUrl: '',
  },
];

export { BASE_URL, homePlayListInfo, homeGameListInfo }
