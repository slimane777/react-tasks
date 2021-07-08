import React from 'react'
import PropTypes from 'prop-types'

// bring connect from react-redux, it's the bridge for connecting component to redux
import { useSelector, useDispatch } from 'react-redux'

// bring the actions, just bring that have REQUESTED in the suffix
// If you dispatching that doesn't have REQUESTED, it will not work
import {
  SET_TASK_TITLE_REQUESTED,
  CREATE_TASK_REQUESTED
} from '../redux/actions/tasks'

const TaskForm = () => {

    const title = useSelector((state) => state.title);
    
    const dispatch = useDispatch();

    const setTaskTitle = (title) => dispatch({ type: SET_TASK_TITLE_REQUESTED, payload: title });
    const createTask = (title) => dispatch({ type: CREATE_TASK_REQUESTED, payload: title });

  const onChange = (e) => {
    setTaskTitle(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    createTask(title)
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
	type="text" 
	placeholder="What needs to be done..." 
	onChange={onChange}
	value={title}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

TaskForm.propTypes = {
  title: PropTypes.string,
//   setTaskTitle: PropTypes.func.isRequired,
//   createTask: PropTypes.func.isRequired
}

export default TaskForm;