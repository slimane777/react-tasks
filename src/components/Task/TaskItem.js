import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TaskRow, TaskLabel, TaskTime, CheckboxContainer, StyledCheckbox, Icon } from './styles'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import {
  UPDATE_TASK_REQUESTED
} from '../../redux/actions/tasks'

function TaskItem({ task }) {

  const dispatch = useDispatch()

  const [isChecked, setIsChecked] = useState(task.completed ? task.completed : false)

  const updateTask = (taskObj) => dispatch({ type: UPDATE_TASK_REQUESTED, payload: taskObj });

  return (
    <TaskRow 
      onClick={()=>{
        setIsChecked(!isChecked)
        let obj = {
          id: task.id, 
          title: task.title, 
          completed: !task.completed, 
          dateOfComplete: moment(new Date())
        }
        console.log({obj})
        updateTask(obj)
      }}
    >

      <CheckboxContainer >
        <StyledCheckbox 
          checked={isChecked} 
        >
          {
            isChecked &&
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          }
        </StyledCheckbox>
      </CheckboxContainer>

      <TaskLabel checked={isChecked}>
        {task.title}
      </TaskLabel>
      <TaskTime>
        {moment(task.dateOfComplete ? task.dateOfComplete : new Date()).format('h:MM a')}
      </TaskTime>
     </TaskRow>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
}

export default TaskItem