import {useState} from "react"
import {useRouter} from "next/router"

import {questionList, listenerTypeList} from "../utils/constant";

export default function TestPage() {
  const [currentNum, setCurrentNum] = useState(0);
  const router = useRouter();
  const question = questionList[currentNum];

  console.log(listenerTypeList);
  const nextAction = () => {
    if (currentNum === questionList.length-1) {
      router.push('/listener-type/result/3').then(r => console.log(r));
    } else {
      setCurrentNum(currentNum+1);
    }
  }

  return (
    <div>
      {currentNum}
      <div>
        {question.question}
      </div>
      <div>
        {question.answers}
      </div>
      <button onClick={() => nextAction()}>
        다음 문제
      </button>
    </div>
  )
}