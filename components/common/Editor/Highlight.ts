import { Quill } from "react-quill";

const Inline = Quill.import('blots/inline');
class Highlight extends Inline {
  static create(value) {
    let node = super.create();
    node.setAttribute('style', 'background: linear-gradient(to top, #83ffb2 50%, transparent 50%);');
    return node;
  }
}

Highlight.blotName = 'highlight';
Highlight.tagName = 'highlight';
Highlight.className = 'custom-highlight';

export default Highlight
