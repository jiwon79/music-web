import {useRouter} from "next/router";
import {useState} from "react";
import {questionType} from "../game/types";

export default function useGame<T extends string[]>(questionList: Array<questionType>, resultSet: T) {
  const defaultResultDict: Record<string, number> = resultSet.reduce((accumulator, value) => {
    return {...accumulator, [value]: 0};
  }, {});

  const router = useRouter();
  const [currentNum, setCurrentNum] = useState<number>(0);
  const [answerList, setAnswerList] = useState<number[]>([]);
  const [resultDict, setResultDict] = useState(defaultResultDict);
  const question = questionList[currentNum];

  const nextQuestion = (answer) => {
    if (currentNum === questionList.length - 1) {
      router.push({
        pathname: `${router.asPath}/../loading`,
        query: {
          resultDict: JSON.stringify(resultDict),
          answers: [...answerList, answer]
        },
      }).then(r => console.log(r));
    } else {
      setCurrentNum(currentNum+1);
      setAnswerList([...answerList, answer]);
      question.result[answer].map(type => {
        setResultDict(resultDict => {
          return {
            ...resultDict,
            [type] : resultDict[type] + 1
          }
        })
      })
    }
  }

  return {currentNum, question, nextQuestion}
}
