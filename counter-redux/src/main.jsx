import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import counterStore from './store/counter-store.jsx'
import {Provider} from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={counterStore}>
      <App />
  </Provider>

  </React.StrictMode>,
)
