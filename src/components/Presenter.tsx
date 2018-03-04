import * as React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../stores/store';
import { Section } from '../sections/sections'
export interface PresenterProps {
  section?: Section
}

class Presenter extends React.Component<PresenterProps> {
  render() {
    const {section} = this.props
    return (
      <div>
        <h2>{section && section.title}</h2>
        <div className="subTitle">{section && section.subTitle}</div>
        {section && section.content}
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