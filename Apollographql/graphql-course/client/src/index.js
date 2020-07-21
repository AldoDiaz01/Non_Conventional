import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './client'
import App from './App'
import './index.css';

const Root = () => (
  <div id="root">
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </div>
)

ReactDOM.render(<Root />, document.getElementById('root'))

if(module.hot) {
  module.hot.accept()
}