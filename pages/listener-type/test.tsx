import {useState} from "react"
import {useRouter} from "next/router"

import {questionList} from "../../utils/constant";
import Header from "../../components/listener-type/Header";
import styles from "../../styles/listener-type/Test.module.css"
import Menu from "../../components/listener-type/Menu";

export default function TestPage() {
  const router = useRouter();
  const [currentNum, setCurrentNum] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Array<number>>([]);
  const question = questionList[currentNum];
  const progress = ((currentNum+1)*100/questionList.length).toString();
  console.log(currentNum);

  const nextAction = (answerNum) => {
    if (currentNum === questionList.length-1) {
      router.push('/listener-type/result/0').then(r => console.log(r));
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
      <Header title={"What's your listener type?"}/>
      <Menu/>
      <div className={styles.question}>
        <p>Q0{currentNum+1}.</p>
        <p>{question.question}</p>
      </div>
      {answerComponents}
      <div className={styles.progressBar}>
        <div style={{ width: `${progress}%`}} className={styles.progress}> </div>
      </div>
    </div>
  )
}
