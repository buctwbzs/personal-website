import React, { Component } from 'react'
import { Editor as ReactEditor } from 'react-draft-wysiwyg'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styled from 'styled-components'
import './editor.scss'

const EditorBox = styled.div`
  padding: 24px;
  height: 6000px;
`
/**
 * 
 */
class Editor extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  onEditorStateChange = editorState => {
    console.log('editorState', editorState)
  }
  onChange = rawDraftContentState => {
    console.log('rawDraftContentState', rawDraftContentState)
  }
  onContentStateChange = contentState => {
    console.log('contentState', contentState)
  }
  render() {
    return (
      <EditorBox>
        <div style={{ height: '68', lineHeight: '68px', border: '1px solid #FADB14', marginBottom: '20px' }} >分类:下拉框  | 标签: 输入框  |  存为草稿:按钮  | 发布: 按钮</div>
        <ReactEditor
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          localization={{
            locale: 'zh',
          }}
          onEditorStateChange={this.onEditorStateChange}
          onContentStateChange={this.onContentStateChange}
          onChange={this.onChange}
        />
      </EditorBox>
    )
  }
}

Editor.propTypes = {

}

export default Editor