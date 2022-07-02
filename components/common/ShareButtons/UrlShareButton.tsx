import React from "react";

export interface UrlProps {
  url: string,
  className?: string,
  children: JSX.Element,
}

const UrlShareButton: React.FC<UrlProps> = ({ url, className, children }) => {
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('복사되었습니다.')
    } catch {
      alert('복사 실패')
    }
  }

  return (
    <button onClick={() => copyText()} className={className}>
      {children}
    </button>
  )
}

export default UrlShareButton
