import * as React from 'react';
import Sections from '../components/Sections'
import Presenter from '../components/Presenter'
import Grid from 'material-ui/Grid'

class App extends React.Component {
  render() {
    return (
      <Grid container={true}>
        <Grid item={true} xs={2}>
          <h2>Clojure Backshop</h2>
          <Sections onChangeSection={() => undefined}/ >
        </Grid>
        <Grid item={true} xs={10}>
          <Presenter / >
        </Grid>
      </Grid>
    );
  }
}

export default App
