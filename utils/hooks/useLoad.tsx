import {useRef, useState} from "react";

interface useLoadProps {
  timeToLoad: number;
  loadTextList?: string[];
}

const useLoad = ({
  timeToLoad, loadTextList = ['.', '..', '...']}: useLoadProps
) => {
  const delay = () => new Promise((resolve) => setTimeout(resolve, 1000))
  const [currentNum, setCurrentNum] = useState<number>(0);
  const currentNumRef = useRef<number>(0);

  const loadAction = async () => {
    for await (const i of Array(timeToLoad).fill(0)) {
      await delay();
      currentNumRef.current = currentNumRef.current + 1;
      console.log(currentNumRef.current);
      setCurrentNum(currentNumRef.current)
    }
  }

  return {loadText: loadTextList[currentNum % loadTextList.length], loadAction}
}

export default useLoad
