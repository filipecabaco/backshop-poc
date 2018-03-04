import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { StoreState } from './stores/store'
import { menuReducer } from './reducers/menu'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css';

const store = createStore<StoreState>(menuReducer, { })

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root') as HTMLElement)

registerServiceWorker()
