import * as React from "React"
import KaKaoShareButton, { KaKaoProps } from "./KaKaoShareButton";

interface Props {
  KaKao: React.FC<KaKaoProps>,
}

const ShareButton: Props = () => {}
ShareButton.KaKao = KaKaoShareButton;

export default ShareButton
