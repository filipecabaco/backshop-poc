import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import * as actions from '../actions/menu';
import { StoreState } from '../stores/store';
import { Section, DefnSection, TestSection } from '../sections/sections'

export interface MenuProps {
  section?: Section
  onChangeSection: (section: Section) => void
}

class Menu extends React.Component<MenuProps> {
  render() {
    const {onChangeSection} = this.props
    return (
      <div>
      <div>
        <button onClick={() => {onChangeSection(DefnSection)}}>Section 1</button>
        <button onClick={() => {onChangeSection(TestSection)}}>Section 2</button>
        <button onClick={() => {onChangeSection(DefnSection)}}>Section 3</button>
      </div>
    </div>)
  }
}

function mapStateToProps({ section }: StoreState) {
  return { section }
}

function mapDispatchToProps(dispatch: Dispatch<actions.ChangeSection>) {
  return {
    onChangeSection: (section: Section) => dispatch(actions.changeSection(section)),
  }
}

function mergeProps (stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Menu);