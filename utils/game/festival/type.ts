import {ResultStandard} from "./enums";

export interface questionType {
  question: string,
  answers: Array<string>,
  result: Array<Array<ResultStandard>>
}
