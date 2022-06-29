export default function FacebookShare({ url }) {
  const onClickFacebook = () => {
    const shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    window.open(shareUrl);
  }

  return (
    <button onClick={onClickFacebook}>
      Facebook
    </button>
  )
}
