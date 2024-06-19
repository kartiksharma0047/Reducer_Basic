import React from 'react'
import ReactDOM from 'react-dom/client'

// // Change the location for Store or else remove it
// import { store } from './reduxTodoList/store';
// import { Provider } from 'react-redux'

// Change the location of file
// import App from './Set_E_Commerce_Website/DisplayMainPage'
import App_one from './todo List/Todo[1]'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App_one />
    {/* </Provider> */}
  </React.StrictMode>,
)
