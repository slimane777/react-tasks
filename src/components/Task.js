import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  GET_TASKS_REQUESTED,
  DELETE_TASK_REQUESTED
} from '../redux/actions/tasks';
// Components
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import ClearButton from './Button/ClearButton';
import HeaderDate from './Date/HeaderDate';

const Task = () => {

    const tasks = useSelector((state) => state.tasks);
    
    const dispatch = useDispatch();

    useEffect(() => {
        console.log({tasks})
        getTasks()
    }, [])

    const getTasks = () => dispatch({ type: GET_TASKS_REQUESTED })

    const deleteTask = (id) => dispatch({ type: DELETE_TASK_REQUESTED, payload: id })

    return (
        <>
            <HeaderDate/>
            <ClearButton clearTasks={()=>{}} count={4} />
            <TaskForm />
            {tasks.loading && 'Loading...'}
            {tasks && tasks.tasks?.map((task, index) => (
                <TaskItem task={task} key={index} deleteTask={deleteTask} />
            ))}
        </>
    )
}

Task.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.array,
//   getTasks: PropTypes.func.isRequired,
//   deleteTask: PropTypes.func.isRequired
}

export default Task