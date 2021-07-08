import { spawn } from 'redux-saga/effects'

// Sagas
import taskSaga from './tasks'

// Export the root saga
export default function* rootSaga() {
  console.log("Hello From Redux-Saga!")

  yield spawn(taskSaga)
}