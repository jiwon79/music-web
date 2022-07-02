import Header from "../../../components/listener-type/Header";
import Menu from "../../../components/listener-type/Menu";
import MusicBar from "../../../components/listener-type/MusicBar";

import useGame from "../../../utils/hooks/useGame";
import {resultSet} from "../../../utils/game/listener/enum";
import {questionList} from "../../../utils/game/listener/constant";
import styles from "../../../styles/game/listener/Test.module.scss"

export default function TestPage() {
  const { currentNum, question, nextQuestion } = useGame(questionList, resultSet)
  const progress = ((currentNum+1)*100/questionList.length).toString();

  const answerComponents = question.answers.map((answer, index) =>
    <button
      key={index}
      onClick={() => nextQuestion(index)}
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
