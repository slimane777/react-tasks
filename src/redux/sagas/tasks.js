import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'
  
  // Import all actions and api's
  import {
    SET_LOADING,
    GET_TASKS,
    GET_TASKS_REQUESTED,
    SET_TASK_TITLE,
    SET_TASK_TITLE_REQUESTED,
    CLEAR_TASK_TITLE,
    CREATE_TASK,
    CREATE_TASK_REQUESTED,
    UPDATE_TASK,
    UPDATE_TASK_REQUESTED,
    DELETE_TASK,
    DELETE_TASK_REQUESTED
  } from '../actions/tasks'
  
  // Import all api's
  import {
    getAllTasks,
    createNewTask,
    updateExistingTask,
    deleteExistedTask
  } from '../api/tasks'
  
  // Here's the unique part, generator function*, function with asterisk(*)
  
  // Get Tasks
  function* getTasks() {
    yield put({ type: SET_LOADING })
  
    const tasks = yield call(getAllTasks)
  
    yield put({ type: GET_TASKS, payload: tasks })
  }
  
  // Set the title of task
  function* setTaskTitle({ payload }) {
    yield put({ type: SET_TASK_TITLE, payload })
  }
  
  // Create TASK
  function* createTask({ payload }) {
    yield put({ type: SET_LOADING })
  
    const newTask = yield call(createNewTask, payload)
  
    yield put({ type: CREATE_TASK, payload: newTask })
    
    // Clear TASK after creating
    yield put({ type: CLEAR_TASK_TITLE })
  }

    // Update TASK
    function* updateTask({ payload }) {
      
        yield call(updateExistingTask, payload)
      
        // yield put({ type: UPDATE_TASK, payload: updatedTask })

    }
  
  // Delete TASK
  function* deleteTask({ payload }) {
    yield put({ type: SET_LOADING })
  
    const task = yield call(deleteExistedTask, payload)
  
    yield put({ type: DELETE_TASK, payload: task })

    yield put({ type: GET_TASKS, payload: [] })
  }
  
  // Export the saga (task)
  export default function* taskSaga() {
    yield takeEvery(GET_TASKS_REQUESTED, getTasks)
    yield takeEvery(SET_TASK_TITLE_REQUESTED, setTaskTitle)
    yield takeLatest(CREATE_TASK_REQUESTED, createTask)
    yield takeLatest(UPDATE_TASK_REQUESTED, updateTask)
    yield takeEvery(DELETE_TASK_REQUESTED, deleteTask)
  }