export interface FacebookProps {
  url: string,
  className?: string,
  children: JSX.Element,
}

const FacebookShareButton = ({ url, className, children }) => {
  const onClickFacebook = () => {
    const shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    window.open(shareUrl);
  }

  return (
    <button onClick={onClickFacebook} className={className}>
      {children}
    </button>
  )
}

export default FacebookShareButton
