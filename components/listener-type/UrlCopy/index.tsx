import { useRef } from "react";
import styles from "./style.module.scss";

export default function UrlCopy({ url }) {
  const copyLinkRef = useRef(null);
  const copyTextUrl = () => {
    copyLinkRef.current.focus();
    copyLinkRef.current.select();
    document.execCommand('copy');
    alert('복사되었습니다.');
  }

  return (
    <div>
      <input
        type="text"
        ref={copyLinkRef}
        value={url}
        className={styles.input}
      />
      <button onClick={() => copyTextUrl()}>
        링크
      </button>
    </div>
  )
}
