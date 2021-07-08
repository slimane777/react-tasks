import React from 'react'
import PropTypes from 'prop-types'

const TaskItem = ({ task, deleteTask }) => {
  return (
    <p 
      onDoubleClick={() => deleteTask(task.id)} 
      style={{ cursor: 'pointer' }}
     >
       {task.title}
     </p>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default TaskItem