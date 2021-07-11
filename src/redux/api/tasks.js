import defaultAxios from 'axios'

const axios = defaultAxios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com/',
  baseURL: 'http://localhost:3000/',
  headers: {'Content-Type': 'application/json'}
});

// Get All Tasks
export const getAllTasks = async () => {
  try {
    const tasks = await axios.get('tasks')
    console.log('let me see')
    console.log({tasks})
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
    console.log({task})
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
    console.log({task})
    console.log({task})
    getAllTasks()
    return task.data
  } catch(err) {
    return console.error({err})
  }
}

// Delete existed Task
export const deleteExistedTask = async (id) => {
  try {
    await axios.delete(`tasks/${id}`)
    
    return id
  } catch(err) {
     return console.error({err})
  }
}