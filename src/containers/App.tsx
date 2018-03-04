import * as React from 'react';
import { connect } from 'react-redux'
import Sections from '../components/Sections'
import Presenter from '../components/Presenter'
import Grid from 'material-ui/Grid'
import { StoreState } from '../stores/store'

class App extends React.Component<StoreState> {
  render() {
    const { section } = this.props
    return (
      <Grid container={true}>
        <Grid item={true} xs={2}>
          <h2>Clojure Backshop</h2>
          <Sections onChangeSection={() => undefined} section={section}/>
        </Grid>
        <Grid item={true} xs={10}>
          <Presenter section={section}/>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps({ section }: StoreState) {
  return { section }
}

function mapDispatchToProps() { return {} }

function mergeProps (stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);