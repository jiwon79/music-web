import * as React from "React"
import KaKaoShareButton, { KaKaoProps } from "./KaKaoShareButton";
import TwitterShare, { TwitterProps } from "./TwitterShareButton";
import FacebookShareButton, { FacebookProps } from "./FacebookShareButton";
import UrlShareButton, { UrlProps } from "./UrlShareButton";

interface Props {
  KaKao: React.FC<KaKaoProps>,
  Twitter: React.FC<TwitterProps>,
  Facebook: React.FC<FacebookProps>,
  Url: React.FC<UrlProps>,
}

const ShareButton: Props = () => {}
ShareButton.KaKao = KaKaoShareButton;
ShareButton.Twitter = TwitterShare;
ShareButton.Facebook = FacebookShareButton;
ShareButton.Url = UrlShareButton;

export default ShareButton
