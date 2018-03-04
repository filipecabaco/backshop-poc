import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { StoreState } from './stores/store'

import { sectionReducer } from './reducers/section'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import { allSections } from './sections/sections'
import './index.css';

const store = createStore<StoreState>(sectionReducer, {section: allSections()[0]})

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root') as HTMLElement)

registerServiceWorker()
