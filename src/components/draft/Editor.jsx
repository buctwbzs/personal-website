import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Editor as WYSIWYG } from 'react-draft-wysiwyg'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchCategoriesStart } from '../../store/actions/draft/categories'
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

  static defaultProps = {

  }

  static propTypes = {
    fetchCategoriesStart: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.fetchCategoriesStart({ loading: true })
  }

  render() {
    return (
      <EditorBox>
        <Head>
          <div>
            <SelectBox>
              <select name="category" id="category" defaultValue="请选择一个分类">
                <option value="请选择一个分类" disabled>Categories </option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Mysql">Mysql</option>
                <option value="Data-Structure">Data-Structure</option>
                <option value="Algorithm">Algorithm</option>
                <option value="Linux">Linux</option>
                <option value="Life">Life</option>
              </select>
              <input type="text" placeholder="Tags..." />
            </SelectBox>
            <TitleBox>
              <input type="text" placeholder="Title..." />
            </TitleBox>
          </div>
          <BtnGroup>
            <button>Save As</button>
            <button>Publish</button>
          </BtnGroup>
        </Head>
        <WYSIWYG
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
        />

      </EditorBox>
    )
  }
}

Editor.propTypes = {

}
const mapStateToProps = (state) => ({
  categories: state.draftStore.categories
})
const mapDispatchToProps = {
  fetchCategoriesStart
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)