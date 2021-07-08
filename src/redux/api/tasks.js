import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {'Content-Type': 'application/json'}
});

// Get All Tasks
export const getAllTasks = async () => {
  try {
    const tasks = await axios.get('todos?_limit=5')

    return tasks.data
  } catch(err) {
    return console.error(err)
  }
}

// Create New Task
export const createNewTask = async (title) => {
  try {
    const task = await axios.post('todos', {
      title
    })

    return task.data
  } catch(err) {
    return console.error(err)
  }
}

// Delete existed Task
export const deleteExistedTask = async (id) => {
  try {
    await axios.delete(`todos/${id}`)
    
    return id
  } catch(err) {
     return console.error(err)
  }
}