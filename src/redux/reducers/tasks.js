import { 
    SET_LOADING,
    GET_TASKS,
    SET_TASK_TITLE,
    CREATE_TASK,
    UPDATE_TASK,
    DELETE_TASK,
    CLEAR_TASK_TITLE
  } from '../actions/tasks'
  
  // Define state here
  const initialState = {
    loading: false,
    tasks: [],
    title: ''
  }
  
  // This export default will control state for your application
 const taskReducer = (state = initialState, {type, payload}) => {
    switch(type) {
      // Set loading
      case SET_LOADING:
        return {
          ...state,
      loading: true
        }
      // Get tasks
      case GET_TASKS:
        return {
          ...state,
          tasks: payload,
          loading: false
        }
      // Set task title input 
      case SET_TASK_TITLE:
        return {
          ...state,
      title: payload
        }
      // Create new TASK
      case CREATE_TASK:
        return {
      ...state,
      tasks: [payload, ...state.tasks],
      loading: false
        }
      // update TASK
      case UPDATE_TASK:
        return {
      ...state,
      tasks: [payload, ...state.tasks],
        }
      // Clear TASK title in form after creating a new one
      case CLEAR_TASK_TITLE:
        return {
          ...state,
            title: ''
        }
      // Delete existed TASK
      case DELETE_TASK:
        return {
          ...state,
      tasks: state.tasks.filter(task => task.id !== payload),
      loading: false
        }
      // Return default state if didn't match any case
      default:
        return state
    }
  }

  export default taskReducer