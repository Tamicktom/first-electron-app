//* libraries imports
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Placeholder from '@tiptap/extension-placeholder'
import Document from '@tiptap/extension-document'
import { EditorContent, useEditor } from '@tiptap/react'

export function Editor(): JSX.Element {
  const editor = useEditor({
    extensions: [
      Document.extend({
        content: 'heading block*'
      }),
      StarterKit.configure({
        document: false
      }),
      Highlight,
      Typography,
      Placeholder.configure({
        placeholder: 'Untitled',
        emptyEditorClass:
          'before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:pointer-events-none'
      })
    ],
    content: '<h1>Hello World!</h1>',
    autofocus: 'end',
    editorProps: {
      attributes: {
        class: 'focus:outline-none prose prose-invert prose-headings:mt-0'
      }
    }
  })

  return <EditorContent className="w-[65ch]" editor={editor} />
}
