import * as React from 'react';
import { connect, Dispatch } from 'react-redux'
import { MenuItem } from 'material-ui/Menu'
import Paper from 'material-ui/Paper'
import ListItemText  from 'material-ui/List/ListItemText'
import ListItemIcon  from 'material-ui/List/ListItemIcon'
import MenuList from 'material-ui/Menu/MenuList'
import * as actions from '../actions/sections'
import { StoreState } from '../stores/store'
import { allSections, Section } from '../sections/sections'
const { WebAsset } = require('material-ui-icons')

const sections = allSections()
export interface SectionsProps {
  section?: Section
  onChangeSection: (section: Section) => void
}
class Sections extends React.Component<SectionsProps> {
  render() {
    const {onChangeSection} = this.props

    return (
      <Paper>
        <MenuList>
          {
            sections.map((s, i) => (
              <MenuItem onClick={() => {onChangeSection(s)}} key={`section_${i}`}>
                <ListItemIcon>
                  <WebAsset/>
                </ListItemIcon>
                <ListItemText primary={s.title} />
              </MenuItem>
            ))
          }
        </MenuList>
      </Paper>
      )
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
  return Object.assign({}, ownProps, stateProps, dispatchProps)
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Sections)