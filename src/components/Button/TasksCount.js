import React from 'react'
import PropTypes from 'prop-types'
import { Count } from './styles'

const TasksCount = ({ count }) => {
  return (
    <Count>
        {count} Tasks
    </Count>
  )
}

TasksCount.propTypes = {
    count: PropTypes.func.isRequired
}

export default TasksCount;