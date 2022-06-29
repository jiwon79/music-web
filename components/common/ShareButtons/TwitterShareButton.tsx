import * as React from "React";

export interface TwitterProps {
  url: string,
  text: string,
  className?: string,
  children: JSX.Element,
}

const TwitterShare: React.FC<TwitterProps> = ({ url, text, className, children }) => {
  const onClickTwitter = () => {
    const shareUrl = 'https://twitter.com/intent/tweet?text=' + text + '&url=' + url;
    window.open(shareUrl);
  }
  return (
    <button onClick={onClickTwitter} className={className}>
      {children}
    </button>
  )
}

export default TwitterShare
