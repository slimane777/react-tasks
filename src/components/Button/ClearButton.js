import React from 'react'
import PropTypes from 'prop-types'
import { Button, Wrapper } from './styles'
import TasksCount from './TasksCount';
import { useSelector } from 'react-redux';

const ClearButton = ({ clearTasks }) => {

  const count = useSelector((state) => state.tasks.tasks)
  return (
    <Wrapper>
      <TasksCount count={count.length} />
      <Button onClick={() => clearTasks()}>
          Clear List
      </Button>
    </Wrapper>
  )
}

ClearButton.propTypes = {
  clearTasks: PropTypes.func.isRequired,
}

export default ClearButton;