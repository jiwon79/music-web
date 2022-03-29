import {ListenerTypeName} from "./enum";

export interface questionType {
  question: string,
  answers: Array<string>,
  result: Array<Array<ListenerTypeName>>
}

export interface listenerType {
  type: string,
  name: string,
  description: string,
  keywords: Array<string>,
  listenMusic: Array<string>,
  findMusic: Array<string>,
  enjoyMusic: Array<string>,
  recommend: Array<Music>
}

export interface Music {
  title: string,
  artist: string,
  youtube: string,
}
