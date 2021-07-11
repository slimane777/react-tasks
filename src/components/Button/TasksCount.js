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
    count: PropTypes.number.isRequired
}

export default TasksCount;