import * as React from 'react';
import { connect } from 'react-redux';

import { StoreState } from '../stores/store';
import { Section } from '../sections/sections'
export interface PresenterProps {
  section?: Section
}

class Presenter extends React.Component<PresenterProps> {
  render() {
    return (
      <div>
        <h1>{this.props.section && this.props.section.title}</h1>
        {this.props.section && this.props.section.content}
      </div>
      )
  }
}

function mapStateToProps({ section }: StoreState) {
  return { section }
}

function mapDispatchToProps() { return {} }

function mergeProps (stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Presenter);