import useLoad from "../../../utils/hooks/useLoad";
import {useEffect} from "react";

export default function LoadingPage() {
  const {loadText, loadAction} = useLoad(4);
  useEffect(() => {
    loadAction();
  }, []);
  
  return (
    <div>
      <p>loading page</p>
      <p>{loadText}</p>
    </div>
  )
}
