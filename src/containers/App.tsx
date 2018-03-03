import * as React from 'react';
import Menu from '../components/Menu'
import Presenter from '../components/Presenter'
class App extends React.Component {
  render() {
    return (
      <div>
        <Menu onChangeSection={() => undefined}/ >
        <Presenter / >
      </div>
    );
  }
}

export default App
