import useGame from "../../../utils/hooks/useGame";
import {questionList} from "../../../utils/game/festival/constant";
import {resultSet} from "../../../utils/game/festival/enums";
import {koreanOrder} from "../../../utils/game/constant";

export default function TestPage() {
  const { currentNum, question, nextQuestion } = useGame(questionList, resultSet);

  const answerComponents = question.answers.map((answer, index) =>
    <button
      key={index}
      onClick={() => nextQuestion(index)}
    >
      {answer}
    </button>
  );

  return (
    <div>
      <p>{koreanOrder[currentNum]}</p>
      <div>
        {question.question}
      </div>
      <div>
        {answerComponents}
      </div>
    </div>
  )
}
