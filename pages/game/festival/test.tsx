import useGame from "../../../utils/hooks/useGame";
import {questionList} from "../../../utils/game/festival/constant";
import {resultSet} from "../../../utils/game/festival/enums";

export default function TestPage() {
  const { question, nextQuestion } = useGame(questionList, resultSet);

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
      <div>
        {question.question}
      </div>
      <div>
        {answerComponents}
      </div>
    </div>
  )
}
