import {ResultStandard} from "./enums";

export interface resultDictType {
  [ResultStandard.LIVELY]: number,
  [ResultStandard.PLAN]: number,
  [ResultStandard.CALM]: number,
  [ResultStandard.FREE]: number,
  [ResultStandard.MOOD]: number,
  [ResultStandard.OTAKU]: number,
}

export const defaultResultDict = {
  [ResultStandard.LIVELY]: 0,
  [ResultStandard.PLAN]: 0,
  [ResultStandard.CALM]: 0,
  [ResultStandard.FREE]: 0,
  [ResultStandard.MOOD]: 0,
  [ResultStandard.OTAKU]: 0,
}
