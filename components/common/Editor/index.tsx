import {useMemo, useRef} from "react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill, {Quill} from "react-quill";

export default function Editor({setHtmlStr}) {
  const editorRef = useRef<ReactQuill>(null)

  const Inline = Quill.import('blots/inline');

  const insert = () => {
    const edi = editorRef.current.getEditor();
    const range = edi.getSelection();
    const position = range ? range.index : 0;
    edi.insertText(position, 'Hello, World! ')
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
        ['sound']
      ],
      handlers: {
        insert: insert,
        highlight: insert,
        link: function(value) {
          if (value) {
            var href = prompt('Enter the URL');
            this.quill.format('link', href);
          } else {
            this.quill.format('link', false);
          }
        },
        sound: function(value) {
          if (value) {
            console.log(this.quill.format)
            var href = prompt('Enter the URL');
            this.quill.format('link', href);
          } else {
            this.quill.format('link', false);
          }
        }
      },
    },
    clipboard: {
      matchVisual: false
    },
  }), []);

  return (
    <div>
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
