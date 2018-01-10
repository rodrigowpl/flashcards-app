import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from 'reducers'
import App from './app'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default class Flashcards extends PureComponent {
  render () {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>
    )
  }
}
