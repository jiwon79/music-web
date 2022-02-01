import { useState } from "react"
import {questionList} from "../utils/constant";

export default function TestPage() {
  const [currentNum, setCurrentNum] = useState(0);
  const question = questionList[currentNum];
  console.log(questionList[currentNum]);

  return (
    <div>
      <div>
        {question.question}
      </div>
      <div>
        {question.answers}
      </div>
      <button onClick={() => setCurrentNum(currentNum+1)}>
        다음 문제
      </button>
    </div>
  )
}