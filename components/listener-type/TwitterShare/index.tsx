import styles from "./../../common/ShareButton/shareButton.module.scss"

export default function TwitterShare({ url, text }) {
  const onClickTwitter = () => {
    const shareUrl = 'https://twitter.com/intent/tweet?text=' + text + '&url=' + url;
    window.open(shareUrl);
  }

  return (
    <div className={styles.shareButton}>
      <button onClick={onClickTwitter}>
        Twitter
      </button>
    </div>
  )
}
