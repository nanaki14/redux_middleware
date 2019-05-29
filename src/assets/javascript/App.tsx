import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import CounterContainer from './containers/CounterContainer'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <CounterContainer />
      </div>
    </Provider>
  )
}
