import React from 'react'
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
  UndoIcon
} from '../components/CustomIcons'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  return (
    <div className="editor-bar">
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
        title="Code Block"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <CodeBlockIcon />
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
      <button onClick={addImage}>
        <ImageIcon />
      </button>
    </div>
  )
}

// export default () => {
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: `
//       <h2>
//         Hi there,
//       </h2>
//       <p>
//         this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
//       </p>
//       <ul>
//         <li>
//           That’s a bullet list with one …
//         </li>
//         <li>
//           … or two list items.
//         </li>
//       </ul>

//     `
//   })

//   return (
//     <div>
//       <MenuBar editor={editor} />
//       <EditorContent editor={editor} />
//     </div>
//   )
// }
