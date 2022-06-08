import {useMemo, useRef} from "react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from "react-quill";

import Highlight from "./Highlight";
import Hr from "./Hr"
import SoundCloud from "./SoundCloud";

Quill.register('formats/em', Highlight);
Quill.register('formats/hr', Hr)
Quill.register('formats/soundCloud', SoundCloud)

export default function Editor({setHtmlStr}) {
  const editorRef = useRef<ReactQuill>(null)
  console.log(editorRef.current.getEditor().getContents())

  const insert = () => {
    const edi = editorRef.current.getEditor();
    const range = edi.getSelection();
    const position = range ? range.index : 0;
    edi.insertText(position, 'Hello, World! ')
  }

  const handleHighlight = () => {
    const editor = editorRef.current.getEditor();
    const range = editor.getSelection();
    if (range) {
      editor.format('highlight', true);
    }
  }

  const handleHr = () => {
    const editor = editorRef.current.getEditor();
    const range = editor.getSelection()
    if (range) {
      editor.insertEmbed(range.index, "hr", "null")
    }
  }

  const handleSoundCloud = () => {
    const editor = editorRef.current.getEditor();
    const href = prompt('Enter the SoundCloud URL');
    const range = editor.getSelection();
    if (range) {
      editor.insertEmbed(range.index, 'soundCloud', href);
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
          // {handleHighlight: ['#00ff00']}
        ],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          {list: 'ordered'},
          {list: 'bullet'},
          {indent: '-1'},
          {indent: '+1'},
        ],
        ['link', 'image', 'video', 'soundCloud'],
        ['clean'],
        ['insert'],
        ['highlight'],
        ['hr']
      ],
      handlers: {
        insert: insert,
        highlight: handleHighlight,
        hr: handleHr,
        soundCloud: handleSoundCloud,
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
