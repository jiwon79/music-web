import Head from "next/head";
import useGame from "utils/hooks/useGame";
import { questionList } from "utils/game/festival/constant";
import { resultSet } from "utils/game/festival/enums";
import { koreanOrder } from "utils/game/constant";

import styles from "./test.module.scss";

export default function TestPage() {
  const { currentNum, question, nextQuestion } = useGame(questionList, resultSet);
  const progress = ((currentNum + 1) * 100 / questionList.length).toString();

  const answerComponents = question.answers.map((answer, index) =>
    <button
      key={index}
      onClick={() => nextQuestion(index)}
      className={styles.button__answer}
    >
      {answer}
    </button>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Festival Type | Test</title>
      </Head>
      <p className={styles.text__order}>{koreanOrder[currentNum]} 질문</p>
      <p className={styles.text__question}>{question.question}</p>
      <div>
        {answerComponents}
      </div>
      <div className={styles.progress}>
        <div style={{ width: `${progress}%`}}> </div>
      </div>
    </div>
  )
}
