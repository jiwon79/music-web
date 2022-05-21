import styles from "../../common/ShareButton/shareButton.module.scss"

export default function FacebookShare({ url }) {
  const onClickFacebook = () => {
    const shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    window.open(shareUrl);
  }

  return (
    <div className={styles.shareButton}>
      <button onClick={onClickFacebook}>
        Facebook
      </button>
    </div>
  )
}
