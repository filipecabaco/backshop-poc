import * as React from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../stores/store'
import { Section } from '../sections/sections'
import * as MarkdownIt from 'markdown-it'
import * as Highlight from 'highlight.js'
const style = require('./Presenter.style.css')

export interface PresenterProps {
  section?: Section
}

const markdown = new MarkdownIt({highlight: function (str: string , lang: string) {
  if (lang && Highlight.getLanguage(lang)) {
    try {
      return Highlight.highlight(lang, str).value;
    } catch (err) {
      console.error(err)
    }
  }
  return ''; // use external default escaping
}})
class Presenter extends React.Component<PresenterProps> {

  render() {
    const {section} = this.props
    const post: string = section ? markdown.render(section.content) : ''
    return (
      <div style={style}>
        <h2>{section && section.title}</h2>
        <div className="subTitle">{section && section.subTitle}</div>
        <div dangerouslySetInnerHTML={{ __html: post }} />
      </div>
      )
  }
}

function mapStateToProps({ section }: StoreState) {
  return { section }
}

function mapDispatchToProps() { return {} }

function mergeProps (stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps)
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Presenter)