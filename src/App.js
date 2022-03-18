// // import logo from './logo.svg';
// // import './App.css';
// import React, {useState} from 'react'
// import data from './data.json'
// import styles from "./ReactTags.module.scss";
// import {WithContext as ReactTags} from 'react-tag-input'
/*
import {useState, useEffect} from 'react'
import {withContext as ReactTags} from 'react-tag-input'
import styles from './ReactTags.module.scss'
import data from './data.json'

const {notes} = data
const suggestions = notes.map(({id, content}) => {
  return {
    id,
    text: content,
  }
})

const KeyCodes = {
  comma: 188,
  enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

function App(props) {
  const [tags, setTags] = useState([
    {id: 'HTML', text: 'HTML'},
    {id: 'web', text: 'web'},
    {id: 'JavaScript', text: 'JavaScript'},
    {id: 'HTTP', text: 'HTTP'},
  ])

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i))
  }

  const handleAddition = (tag) => {
    setTags([...tags, tag])
  }

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags].slice()

    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)

    setTags(newTags)
  }

  const handleTagClick = (index) => {
    console.log('The tag at index ' + index + ' was clicked')
  }

  const onClearAll = () => {
    setTags([])
  }

  const onTagUpdate = (i, newTag) => {
    const updatedTags = tags.slice()
    updatedTags.splice(i, 1, newTag)
    setTags(updatedTags)
  }

  return (
    <div className={styles.ReactTags}>
      <ReactTags
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        delimiters={delimiters}
        handleTagClick={handleTagClick}
        onClearAll={onClearAll}
        onTagUpdate={onTagUpdate}
        suggestions={suggestions}
        placeholder="Search..."
        minQueryLength={2}
        maxLength={5}
        autofocus={false}
        allowDeleteFromEmptyInput={true}
        autocomplete={true}
        readOnly={false}
        allowUnique={true}
        allowDragDrop={true}
        inline={true}
        allowAdditionFromPaste={true}
        editable={true}
        clearAll={true}
        tags={tags}
      />
    </div>
  )
}

export default App
*/
