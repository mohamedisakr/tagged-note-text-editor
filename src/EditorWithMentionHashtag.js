import {useState} from 'react'
import {Editor} from 'react-draft-wysiwyg'
import {EditorState, convertToRaw} from 'draft-js'
// import draftToHtml from 'draftjs-to-html'
// import htmlToDraft from 'html-to-draftjs'
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const EditorWithMentionHashtag = () => {
  const [tags, setTags] = useState([
    {text: 'HTML', value: 'html', url: 'html'},
    {text: 'web', value: 'web', url: 'web'},
    {text: 'JavaScript', value: 'javascript', url: 'javascript'},
    {text: 'HTTP', value: 'http', url: 'http'},
  ])

  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  //   const [contentState, setContentState] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.dir(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    const {text} = editorState.getCurrentContent().getBlockMap()
    // console.log(text)
    console.dir(
      //   JSON.stringify(editorState.getCurrentContent().getBlockMap(), null, 4),
      JSON.stringify(editorState.getSelection(), null, 4),
    )
  }

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  //   const onContentStateChange = (contentState) => {
  //     setContentState(contentState)
  //   }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Editor
          initialEditorState={editorState}
          onEditorStateChange={onEditorStateChange}
          //   editorState={editorState}
          //   initialContentState={contentState}
          //   onContentStateChange={onContentStateChange}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          mention={{
            separator: ' ',
            trigger: '@',
            suggestions: tags,
          }}
          hashtag={{}}
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  )
}

export default EditorWithMentionHashtag

// <div className="container">
//   <div className="row">
//     <Editor
//       editorState={editorState}
//       onEditorStateChange={onEditorStateChange}
//       wrapperClassName="demo-wrapper"
//       editorClassName="demo-editor"
//       mention={{
//         separator: ' ',
//         trigger: '@',
//         suggestions: tags,
//       }}
//       hashtag={{}}
//     />
//   </div>
//   {/* <div className="row"> */}
//   <div className="col-sm">
//     <button className="btn btn-primary" onClick={handleClick}>
//       Save
//     </button>
//   </div>
//   {/* </div> */}
// </div>
