import {useState} from "react";
import dynamic from "next/dynamic";

const DynamicEditor = dynamic(() => import ("../../components/common/Editor"),
  { ssr: false }
)

export default function WritePage() {
  const [htmlStr, setHtmlStr] = useState<string>('');

  return (
    <div>
      글쓰기 페이지
      <DynamicEditor setHtmlStr={setHtmlStr}/>
      <div dangerouslySetInnerHTML={{__html: htmlStr}}/>
    </div>
  )
}
