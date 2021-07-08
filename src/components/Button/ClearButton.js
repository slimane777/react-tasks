import React from 'react'
import { Button, Wrapper } from './styles'
import TasksCount from './TasksCount';
import { useSelector, useDispatch } from 'react-redux';

const ClearButton = () => {

  const count = useSelector((state) => state.tasks.tasks)
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <TasksCount count={count.length} />
      <Button onClick={() => dispatch()}>
          Clear List
      </Button>
    </Wrapper>
  )
}

export default ClearButton;