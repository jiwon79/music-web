import { Quill } from "react-quill";

const Embed = Quill.import('blots/block/embed');
class SoundCloud extends Embed {
  static create(value) {
    let node = super.create(value);
    node.innerHTML = value;
    return node
  }
}

SoundCloud.blotName = 'soundCloud'
SoundCloud.tagName = 'div'
SoundCloud.className = 'soundCloud'

export default SoundCloud
