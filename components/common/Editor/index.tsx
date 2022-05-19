import dynamic from 'next/dynamic'
import {useState} from "react";

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ 'header': ['1', '2', '3', '4', '5', '6', false]}],
    [{ header: '1' }, { header: '2' }, {header: '3'}, { font: [] }],
    [{ align: []}],
    [{ size: [] }],
    [{ color: ['#000', '#fff', '#c8c8c8']}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

export default function Editor() {
  const [text, setText] = useState('');
  console.log(text);

  return <QuillNoSSRWrapper
    theme={'snow'}
    id={'description'}
    placeholder={'설명을 입력해주세요'}
    onChange={(value) => setText(value)}
    modules={modules}
    formats={formats}
  />
}
