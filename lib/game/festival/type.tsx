export interface FestivalType {
  id: number,
  name: string,
  enName: string,
  public_image_url: string,
  standards: string[],
  descriptions: string[],
}

export interface IRecommendFestivalType {
  image_url: string,
  title: string,
  desc: string,
  time: string,
}