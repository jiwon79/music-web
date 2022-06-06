import Editor from "../../components/common/Editor";
import {useState} from "react";

export default function WritePage() {
  const [htmlStr, setHtmlStr] = useState<string>('');

  return (
    <div>
      글쓰기 페이지
      <Editor setHtmlStr={setHtmlStr}/>
      <div dangerouslySetInnerHTML={{__html: htmlStr}}/>
    </div>
  )
}
