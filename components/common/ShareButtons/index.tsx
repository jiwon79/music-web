import * as React from "React"
import KaKaoShareButton, { KaKaoProps } from "./KaKaoShareButton";
import TwitterShare, { TwitterProps } from "./TwitterShareButton";

interface Props {
  KaKao: React.FC<KaKaoProps>,
  Twitter: React.FC<TwitterProps>
}

const ShareButton: Props = () => {}
ShareButton.KaKao = KaKaoShareButton;
ShareButton.Twitter = TwitterShare;

export default ShareButton
