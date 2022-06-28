import {useState} from "react"
import {useRouter} from "next/router"

import {ListenerTypeName} from "../../../utils/game/listener/enum";
import {questionList} from "../../../utils/game/listener/constant";
import Header from "../../../components/listener-type/Header";
import styles from "../../../styles/game/listener/Test.module.scss"
import Menu from "../../../components/listener-type/Menu";
import MusicBar from "../../../components/listener-type/MusicBar";

export default function TestPage() {
  const defaultResultDict = {
    [ListenerTypeName.CHERISH]: 0,
    [ListenerTypeName.INNOCENT]: 0,
    [ListenerTypeName.ANTIQUE]: 0,
    [ListenerTypeName.BIZARRE]: 0,
    [ListenerTypeName.TENDER]: 0,
    [ListenerTypeName.SPONTANEOUS]: 0,
    [ListenerTypeName.PUZZLING]: 0,
    [ListenerTypeName.CANDID]: 0,
  }

  const router = useRouter();
  const [currentNum, setCurrentNum] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Array<number>>([]);
  const [resultDict, setResultDict] = useState(defaultResultDict);
  const question = questionList[currentNum];
  const progress = ((currentNum+1)*100/questionList.length).toString();

  const nextAction = (answerNum) => {
    if (currentNum === questionList.length - 1) {
      let maxType = '';
      let maxTypeNumber = '';
      Object.keys(resultDict).map(type => {
        if (resultDict[type] > maxTypeNumber) {
          maxType = type;
          maxTypeNumber = resultDict[type];
        }
      });
      router.push({
        pathname: '/game/listener/loading',
        query: {
          result: maxType,
          answers: [...userAnswers, answerNum]
        },
      }).then(r => console.log(r));
      // setCurrentNum(0);
    } else {
      setCurrentNum(currentNum+1);
      setUserAnswers([...userAnswers, answerNum]);
      question.result[answerNum].map(type => {
        setResultDict(resultDict => {
          return {
            ...resultDict,
            [type] : resultDict[type] + 1
          }
        })
      })
    }
  }

  const answerComponents = question.answers.map((answer, index) =>
    <button
      key={index}
      onClick={() => nextAction(index)}
      className={styles.answer}
    >
      {answer}
    </button>
  );

  return (
    <div className={styles.container}>
      <Header title={"What's your listener type?"}/>
      <MusicBar/>
      <Menu/>
      <div className={styles.question}>
        <p>Q0{currentNum+1}.</p>
        <p>{question.question}</p>
      </div>
      {answerComponents}
      <div className={styles.progressBar}>
        <div style={{ width: `${progress}%`}}> </div>
      </div>
    </div>
  )
}