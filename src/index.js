import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from 'reducers'
import App from './app'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

export default class Flashcards extends PureComponent {
  render () {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>
    )
  }
}
