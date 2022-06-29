import React, {useRef} from "react";

export interface UrlProps {
  url: string,
  className?: string,
  children: JSX.Element,
}

const UrlShareButton: React.FC<UrlProps> = ({ url, className, children }) => {
  const copyLinkRef = useRef(null);
  const copyTextUrl = () => {
    copyLinkRef.current.focus();
    copyLinkRef.current.select();
    document.execCommand('copy');
    alert('복사되었습니다.');
  }

  return (
    <>
      <input
        type="text"
        ref={copyLinkRef}
        value={url}
        onChange={(e) => {return e}}
        style={{display: 'none'}}
      />
      <button onClick={() => copyTextUrl()} className={className}>
        {children}
      </button>
    </>
  )
}

export default UrlShareButton
