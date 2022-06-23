import {useRouter} from "next/router";
import {useState} from "react";
import {defaultResultDict, resultDictType} from "../game/festival/types";
import {questionType} from "../game/types";

export default function useGame(questionList: Array<questionType>) {
  const router = useRouter();
  const [currentNum, setCurrentNum] = useState(0);
  const [answerList, setAnswerList] = useState<Array<number>>([]);
  const [resultDict, setResultDict] = useState<resultDictType>(defaultResultDict);
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

  return {question: question, nextQuestion: nextQuestion}
}
