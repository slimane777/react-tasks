import React from 'react'
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
// Components
import Task from './components/Task';

const App = () => {
  return (
    <Provider store={store}>
      <Task />
    </Provider>
  )
}
export default App;