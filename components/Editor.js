import React, { useRef, useEffect, useState } from 'react'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  BlockquoteIcon,
  BoldIcon,
  BulletListIcon,
  CodeBlockIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  ImageIcon,
  ItalicIcon,
  NumberListIcon,
  ParagraphIcon,
  RedoIcon,
  StrikeIcon,
  UndoIcon,
  UnderlineIcon,
  TextCenterIcon,
  TextRightIcon,
  TextLeftIcon,
  TextJustifyIcon
} from '../components/CustomIcons'

const MenuBar = ({ editor }) => {
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)
    
    editor.chain().focus().setImage({ src: preview }).run()

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  if (!editor) {
    return null
  }

  const addImage = () => {
    const url = window.prompt('URL')
    editor.commands.focus('start')

    if (url) {
      editor.chain().focus().setImage({ src: preview }).run()
    }
  }

  return (
    <div className="editor-bar ">
      <label title="Add Image" className="editor-btn">
        <ImageIcon />
        <span className="ml-1">Image</span>
        <input type="file" onChange={onSelectFile} />
      </label>
      <button
        title="Add Code Block"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className="editor-btn"
      >
        <CodeBlockIcon />
        <span className="ml-1">Code Block</span>
      </button>
      {/*
      <button
        title="Text Align Left"
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
      >
        <TextLeftIcon />
      </button>
      <button
        title="Text Align Center"
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        <TextCenterIcon />
      </button>
      <button
        title="Text Align Right"
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
      >
        <TextRightIcon />
      </button>
      <button
      title="Text Align Justify"
      onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
      >
      <TextJustifyIcon />
      </button>

      <button
        title="bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <BoldIcon />
      </button>
      <button
        title="italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <ItalicIcon />
      </button>
      <button
        title="strike text"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <StrikeIcon />
      </button>
      <button
        title="strike text"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        <UnderlineIcon />
      </button>

      <button
        title="paragraph"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <ParagraphIcon />
      </button>
      <button
        title="Heading 1"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        <H1Icon />
      </button>
      <button
        title="Heading 2"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        <H2Icon />
      </button>
      <button
        title="Heading 3"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        <H3Icon />
      </button>

      <button
        title="Bulleted List"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <BulletListIcon />
      </button>
      <button
        title="Ordered List"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <NumberListIcon />
      </button>

      <button
        title="Blockquote"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <BlockquoteIcon />
      </button>
      <button
        title="Horizontal Rule"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        horizontal rule
      </button>
      <button
        title="Hard Break"
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        hard break
      </button>
      <button
        title="Mark as Code"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        code
      </button>
      <button
        title="Clear Marks"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        clear marks
      </button>
      <button
        title="Clear Nodes"
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        clear nodes
      </button>
      <button title="Undo" onClick={() => editor.chain().focus().undo().run()}>
        <UndoIcon />
      </button>
      <button title="Redo" onClick={() => editor.chain().focus().redo().run()}>
        <RedoIcon />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive('highlight') ? 'is-active' : ''}
      >
        highlight
      </button>
          */}
    </div>
  )
}

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,

      Placeholder.configure({
        // Use a placeholder:
        placeholder: 'Write something …'
        // Use different placeholders depending on the node type:
        // placeholder: ({ node }) => {
        //   if (node.type.name === 'heading') {
        //     return 'What’s the title?'
        //   }

        //   return 'Can you add some further context?'
        // },
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph']
      })
    ]
    // content: ` `
  })

  return (
    <div>
      <div style={{ backgroundColor: '#f3f3f3' }} className="">
        <EditorContent editor={editor} />
        <MenuBar editor={editor} />
      </div>
      <div className="d-flex justify-content-end pt-1">
        <button className="btn btn-primary">Paylaş</button>
      </div>
    </div>
  )
}
