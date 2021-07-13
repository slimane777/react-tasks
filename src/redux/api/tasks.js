import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: 'http://localhost:3000/',
  headers: {'Content-Type': 'application/json'}
});

// Get All Tasks
export const getAllTasks = async () => {
  try {
    const tasks = await axios.get('tasks')

    return tasks.data
  } catch(err) {
    return console.error(err)
  }
}

// Create New Task
export const createNewTask = async (title) => {
  try {
    const task = await axios.post('tasks', {
        title: title,
        completed: false,
        dateOfComplete: null
    })

    return task.data
  } catch(err) {
    return console.error(err)
  }
}

// Update  Task
export const updateExistingTask = async (taskObj) => {
  try {
    const task = await axios.put('tasks/'+taskObj.id, {
        title: taskObj.title,
        completed: taskObj.completed,
        dateOfComplete: taskObj.dateOfComplete
    })
    return task.data
  } catch(err) {
    return console.error({err})
  }
}

// Delete existed Tasks
export const deleteExistedTask = async (ids) => {

    try {

    ids.map(async (id)=>{
        await axios.delete(`tasks/${id}`)
    })
    
    return ids
  } catch(err) {
     return console.error({err})
  }
}