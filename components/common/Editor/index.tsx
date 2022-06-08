import {useMemo, useRef} from "react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from "react-quill";

import Highlight from "./Highlight";
Quill.register('formats/em', Highlight);

export default function Editor({setHtmlStr}) {
  const editorRef = useRef<ReactQuill>(null)

  const insert = () => {
    const edi = editorRef.current.getEditor();
    const range = edi.getSelection();
    const position = range ? range.index : 0;
    edi.insertText(position, 'Hello, World! ')
  }

  const highlight = () => {
    const editor = editorRef.current.getEditor();
    const range = editor.getSelection();
    if (range) {
      editor.format('highlight', true);
    }
  }

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{header: ['1', '2', '3', '4', '5', '6', false]}],
        [{size: []}],
        [{align: []}],
        [
          {color: ['#000', '#fff', '#c8c8c8']},
          {background: ['#00ff00']},
          // {highlight: ['#00ff00']}
        ],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          {list: 'ordered'},
          {list: 'bullet'},
          {indent: '-1'},
          {indent: '+1'},
        ],
        ['link', 'image', 'video'],
        ['clean'],
        ['insert'],
        ['highlight']
      ],
      handlers: {
        insert: insert,
        highlight: highlight,
        link: function(value) {
          if (value) {
            var href = prompt('Enter the URL');
            this.quill.format('link', href);
          } else {
            this.quill.format('link', false);
          }
        },
      },
    },
    clipboard: {
      matchVisual: false
    },
  }), []);

  return (
    <div>
      <button
        onClick={() => {
          var range = editorRef.current.getEditor().getSelection();
          if (range) {
            editorRef.current.getEditor().format('highlight', true);
          }
        }}
      >
        aa
      </button>
      <ReactQuill
        theme={'snow'}
        ref={editorRef}
        placeholder={'설명을 입력해주세요'}
        onChange={(value) => setHtmlStr(value)}
        modules={modules}
      />
    </div>
  )
}
