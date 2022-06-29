import * as React from "React"
import KaKaoShareButton, { KaKaoProps } from "./KaKaoShareButton";
import TwitterShare, { TwitterProps } from "./TwitterShareButton";
import FacebookShareButton, { FacebookProps } from "./FacebookShareButton";

interface Props {
  KaKao: React.FC<KaKaoProps>,
  Twitter: React.FC<TwitterProps>,
  Facebook: React.FC<FacebookProps>,
}

const ShareButton: Props = () => {}
ShareButton.KaKao = KaKaoShareButton;
ShareButton.Twitter = TwitterShare;
ShareButton.Facebook = FacebookShareButton;

export default ShareButton
