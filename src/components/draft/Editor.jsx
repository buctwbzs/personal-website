import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor as WYSIWYG } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchCategoriesStart } from '../../store/actions/draft/categories'
import { putBlogStart } from '../../store/actions/draft/blog'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './editor.scss'

const EditorBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1160px;
  min-width: 1160px;
  max-width: 1160px;
  height: calc(100vh - 136px);
`
const Head = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2em;
  width: 100%;
`
const SelectBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1em;
  height: 5em;
  > *{
    height: 2.85em;
  }
  select {
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    margin-right: 2em;
    padding: 0 1em;
    width: 12em;
    border: none;
    border-bottom: 1px dashed #FADB14;
    background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right 1em center transparent;
    outline: none;
  }
  select::-ms-expand { display: none; }
  input{
    width: 30em;
    border: none;
    border-bottom: 1px dashed #FADB14;
    outline: none;
  }
`
const TitleBox = styled.div`
  padding-top: 1em;
  height: 5em;
  input{
    padding: .2em 1rem;
    width: 44rem;
    height: 100%;
    border: none;
    border-bottom: 1px dashed #FADB14;
    font-family: PingFangSC-Medium;
    font-size: 1.7rem;
    color: #333;
    letter-spacing: 1.72px;
    line-height: 2.28rem;
    outline: none;
  }
`
const BtnGroup = styled.div`
  display: flex;
  button{
    width: 96px;
    height: 3rem;
    border: 1px solid #FADB14;
    border-radius: 4px;
    background: #FADB14;
    line-height: 2.8rem;
    text-align: center;
    font-size: 1.2rem;
    color: #AD6800;
    &:first-child{
      margin-right: 1rem;
    }
  }
`

class Editor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      category: '',
      tags: '',
      title: '',
      content: EditorState.createEmpty()
    }
  }

  static propTypes = {
    fetchCategoriesStart: PropTypes.func.isRequired,
    putBlogStart: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
  }

  static defaultProps = {
    categories: []
  }
  componentDidMount() {
    this.props.fetchCategoriesStart({ loading: true })
  }

  onControllerChange = e => {
    const target = e.target
    this.setState({
      [target.name]: target.value.trim()
    })
  }
  onEditorStateChange = content => {
    console.log(content)
    this.setState({
      content
    })
  }

  publishClick = () => {

    const content = draftToHtml(convertToRaw(this.state.content.getCurrentContent()))
    const payload = { ...this.state, content }    
    console.log(payload)
    this.props.putBlogStart(payload)
  }

  render() {

    const { categories } = this.props
    const { content } = this.state

    return (
      <EditorBox>
        <Head>
          <div>
            <SelectBox>
              <select
                name="category"
                id="category"
                defaultValue="请选择一个分类"
                onChange={this.onControllerChange}
              >
                <option value="请选择一个分类" disabled>Categories</option>
                {categories.map(({ id, categoryName }) => (
                  <option
                    key={id}
                    value={id}
                  >
                    {categoryName}
                  </option>
                ))}
              </select>
              <input
                name="tags"
                type="text"
                placeholder="Tags..."
                onChange={this.onControllerChange}
              />
            </SelectBox>
            <TitleBox>
              <input
                name="title"
                type="text"
                placeholder="Title..."
                onChange={this.onControllerChange}
              />
            </TitleBox>
          </div>
          <BtnGroup>
            <button>Save As</button>
            <button onClick={this.publishClick}>Publish</button>
          </BtnGroup>
        </Head>
        <WYSIWYG
          editorState={content}
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />

      </EditorBox>
    )
  }
}


const mapStateToProps = (state) => ({
  categories: state.draftStore.categories.categories
})
const mapDispatchToProps = {
  fetchCategoriesStart,
  putBlogStart
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)