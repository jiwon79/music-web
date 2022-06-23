import {questionList} from "../../../utils/game/festival/constant";
import useGame from "../../../utils/hooks/useGame";

export default function TestPage() {
  const { question, nextQuestion } = useGame(questionList);

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
