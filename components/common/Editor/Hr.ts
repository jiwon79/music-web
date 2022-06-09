import { Quill } from "react-quill";

const Embed = Quill.import('blots/block/embed');
class Hr extends Embed {
  static create(value) {
    let node = super.create(value);
    return node
  }
}

Hr.blotName = 'hr'
Hr.tagName = 'hr'

export default Hr
