import {useRef, useState} from "react";

const useLoad = (timeToLoad: number) => {
  const loadTextList: string[] = ['Loading.', 'Loading..', 'Loading...'];
  const delay = () => new Promise((resolve) => setTimeout(resolve, 1000))
  const [currentNum, setCurrentNum] = useState<number>(0);
  const currentNumRef = useRef<number>(0);

  const loadAction = async () => {
    for (const i in Array(timeToLoad).fill(0)) {
      await delay();
      currentNumRef.current = currentNumRef.current + 1;
      setCurrentNum(currentNumRef.current)
    }
  }

  return {loadText: loadTextList[currentNum % loadTextList.length], loadAction}
}
export default useLoad
