import { Quill } from "react-quill";

const Embed = Quill.import('blots/block/embed');
class Instagram extends Embed {
  static create(value) {
    let node = super.create(value);
    const split = value.split('/');
    node.innerHTML = '<embed src="https://instagram.com/'+split[3]+'/'+split[4]+'/embed" height="500"></embed>';
    return node
  }
}

Instagram.blotName = 'instagram'
Instagram.tagName = 'div'
Instagram.className = 'instagram'

export default Instagram
