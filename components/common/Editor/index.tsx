import {useMemo, useRef} from "react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";

export default function Editor({setHtmlStr}) {
  const QuillNoSSRWrapper = typeof window === 'object' ? require('react-quill') : () => false
  const editorRef = useRef<ReactQuill>(null)
  console.log(editorRef.current ? editorRef.current.getEditor().getContents() : 'null')

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
          {background: ['#00ff00']}
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
        ['insert']
      ],
      handlers: {
        insert: insert
      },
    },
    clipboard: {
      matchVisual: false
    },
  }), []);

  const format = [
    "header", "font", "size",
    "bold", "italic", "underline", "strike", "blockquote",
    "align",
    "list", "bullet",
    "indent",
    "background", "color",
    "link", "image", "video",
    "insert"
  ]

  return (
    <QuillNoSSRWrapper
      theme={'snow'}
      ref={editorRef}
      placeholder={'설명을 입력해주세요'}
      onChange={(value) => setHtmlStr(value)}
      modules={modules}
      format={format}
    />
  )
}
