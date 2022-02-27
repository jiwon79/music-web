export interface questionType {
  question: string,
  answers: Array<string>
}

export interface listenerType {
  name: string,
  description: string,
  keywords: Array<string>,
  listenMusic: Array<string>,
  findMusic: Array<string>,
  enjoyMusic: Array<string>,
  recommend: Array<Music>
}

interface Music {
  title: string,
  artist: string,
}
