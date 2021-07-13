import React from 'react'
import { Button, Wrapper } from './styles'
import TasksCount from './TasksCount';
import { useSelector, useDispatch } from 'react-redux';
import {
  DELETE_TASK_REQUESTED
} from '../../redux/actions/tasks'

const ClearButton = () => {

  const count = useSelector((state) => state.tasks.tasks)
  const dispatch = useDispatch()

  const deleteTask = () => dispatch({ type: DELETE_TASK_REQUESTED, payload: 5 });

  return (
    <Wrapper>
      <TasksCount count={count.length} />
      <Button className={'clear'} onClick={() => deleteTask()}>
          Clear List
      </Button>
    </Wrapper>
  )
}

export default ClearButton;