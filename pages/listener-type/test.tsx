import {useState} from "react"
import {useRouter} from "next/router"

import {questionList} from "../../utils/constant";
import Header from "../../components/listener-type/Header";
import styles from "../../styles/listener-type/Test.module.css"

export default function TestPage() {
  const [currentNum, setCurrentNum] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Array<number>>([]);
  const router = useRouter();
  const question = questionList[currentNum];

  const nextAction = (answerNum) => {
    if (currentNum === questionList.length-1) {
      router.push('/listener-type/result/3').then(r => console.log(r));
    } else {
      setCurrentNum(currentNum+1);
      setUserAnswers([...userAnswers, answerNum]);
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
      <Header />
      <p>Q0{currentNum+1}.</p>
      <p className={styles.question}>{question.question}</p>
      {answerComponents}
      <progress max={questionList.length} value={currentNum} />
    </div>
  )
}
