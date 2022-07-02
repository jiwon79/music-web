import useGame from "../../../utils/hooks/useGame";
import {questionList} from "../../../utils/game/festival/constant";
import {resultSet} from "../../../utils/game/festival/enums";
import {koreanOrder} from "../../../utils/game/constant";

import styles from "../../../styles/game/festival/Test.module.scss";

export default function TestPage() {
  const { currentNum, question, nextQuestion } = useGame(questionList, resultSet);
  const progress = ((currentNum+1)*100/questionList.length).toString();

  const answerComponents = question.answers.map((answer, index) =>
    <button
      key={index}
      onClick={() => nextQuestion(index)}
    >
      {answer}
    </button>
  );

  return (
    <div className={styles.container}>
      <p>{koreanOrder[currentNum]}</p>
      <p>{question.question}</p>
      <div>
        {answerComponents}
      </div>
      <div className={styles.progress}>
        <div style={{ width: `${progress}%`}}> </div>
      </div>
    </div>
  )
}
