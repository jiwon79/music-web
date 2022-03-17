import { useRef } from "react";

export default function UrlCopy({ url }) {
  const copyLinkRef = useRef(null);
  const copyTextUrl = () => {
    copyLinkRef.current.focus();
    copyLinkRef.current.select();
    document.execCommand('copy')
  }

  return (
    <div>
      <input type="text" ref={copyLinkRef} value={url}/>
      <button onClick={() => copyTextUrl()}>
        복사
      </button>
    </div>
  )
}
