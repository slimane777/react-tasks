import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import {
  SET_TASK_TITLE_REQUESTED,
  CREATE_TASK_REQUESTED
} from '../../redux/actions/tasks'
import { InputWrapper, Input, Button } from './styles'
import { FiPlus, FiCheck } from "react-icons/fi";

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
        <InputWrapper>
          <FiPlus size={30} color={'#8683a0'} />
          <Input 
            type="text" 
            placeholder="Type your task" 
            onChange={onChange}
            value={title}
          />
          {
            !!title && <Button type="submit">
            <FiCheck size={30} color={'#3dd272'} />
          </Button>
          }
          
        </InputWrapper>
      </form>
  )
}

TaskForm.propTypes = {
  title: PropTypes.string,
//   setTaskTitle: PropTypes.func.isRequired,
//   createTask: PropTypes.func.isRequired
}

export default TaskForm;