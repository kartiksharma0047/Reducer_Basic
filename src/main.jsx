import React from 'react'
import ReactDOM from 'react-dom/client'

// // Change the location for Store or else remove it
// import { store } from './reduxTodoList/store';
// import { Provider } from 'react-redux'

// Change the location of file
import App from './E commerce/FrontPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
)
