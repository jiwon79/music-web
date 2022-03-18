export default function TwitterShare({ url, text }) {
  const onClickTwitter = () => {
    const shareUrl = 'https://twitter.com/intent/tweet?text=' + text + '&url=' + url;
    window.open(shareUrl);
  }

  return (
    <div>
      <button onClick={onClickTwitter}>
        Twitter 공유
      </button>
    </div>
  )
}
