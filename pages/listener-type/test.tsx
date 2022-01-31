import { useState } from "react"

export default function TestPage() {
  const [questionNum, setQuestionNum] = useState(0);
  console.log(questionNum);

  return (
    <div>
      test page
    </div>
  )
}