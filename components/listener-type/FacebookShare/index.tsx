export default function FacebookShare({ url }) {
  const onClickFacebook = () => {
    const shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    window.open(shareUrl);
  }

  return (
    <div>
      <button onClick={onClickFacebook}>
        Facebook 공유
      </button>
    </div>
  )
}
