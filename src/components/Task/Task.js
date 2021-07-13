import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  GET_TASKS_REQUESTED,
  DELETE_TASK_REQUESTED
} from '../../redux/actions/tasks';
// Components
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import Header from '../Header/Header';
import Loading from '../Loader/Loader';
import { Container } from './styles'

function Task() {

    const tasks = useSelector((state) => state.tasks);
    
    const dispatch = useDispatch();

    useEffect(() => {
        const getTasks = () => dispatch({ type: GET_TASKS_REQUESTED })
        getTasks()
    }, [])

    function compare( a, b ) {
        if ( a.id < b.id ){
          return -1;
        }
        if ( a.id > b.id ){
          return 1;
        }
        return 0;
    }

    return (
        <Container>
            <Header />
            <TaskForm />
            {tasks.loading && <Loading />}
            {tasks && tasks?.tasks?.sort(compare)?.map((task, index) => (
                <TaskItem task={task} key={index} />
            ))}
        </Container>
    )
}

export default Task