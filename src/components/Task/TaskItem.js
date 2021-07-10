import React from 'react'
import PropTypes from 'prop-types'
import { TaskRow, TaskCheckBox, TaskLabel, TaskTime, CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon } from './styles'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import {
  UPDATE_TASK_REQUESTED
} from '../../redux/actions/tasks'

const TaskItem = ({ task }) => {

  const dispatch = useDispatch()

  const updateTask = (taskObj) => dispatch({ type: UPDATE_TASK_REQUESTED, payload: taskObj });

  return (
    // <TaskRow onClick={()=>updateTask({id: task.id, title: task.title, completed: !task.completed, dateOfComplete: moment(new Date())})}>
    <TaskRow 
      onClick={(e)=>{
        console.log({e})
        console.log({task})
        e.preventDefault()
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
      {/* <TaskCheckBox 
          type="checkbox"
          value={task.title}
          checked={task.completed}
          onChange={()=>dispatch()}
      /> */}

      <CheckboxContainer >
        {/* <HiddenCheckbox checked={task.completed} /> */}
        <StyledCheckbox 
          checked={task.completed ? task.completed : false} 
          // onChange={(e)=>{
          //   console.log({e})
          //   // let obj = {
          //   //   id: task.id, 
          //   //   title: task.title, 
          //   //   completed: !task.completed, 
          //   //   dateOfComplete: moment(new Date())
          //   // }
          //   // updateTask(obj)
          // }}
        >
          {
            task.completed &&
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          }
        </StyledCheckbox>
      </CheckboxContainer>

      <TaskLabel checked={task.completed}>
        {task.title}
      </TaskLabel>
      <TaskTime>
        {moment(new Date()).format('h:MM a')}
      </TaskTime>
     </TaskRow>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
}

export default TaskItem