import { FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { PlusCircle } from '@phosphor-icons/react'

import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { TaskProps } from './components/TaskItem'

import styles from './app.module.css'

export function App() {
  document.title = 'todo'

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const tasksCreated = tasks.length
  const tasksFinished = tasks.filter((task) => task.isComplete === true).length

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (task.length < 3) return

    const newTask = {
      id: uuidv4(),
      description: task,
      isComplete: false,
    }

    setTasks((state) => [...state, newTask])
    setTask('')
  }

  function finishedTask(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          description: task.description,
          isComplete: !task.isComplete,
        }
      } else {
        return task
      }
    })

    setTasks(newTasks)
  }

  function removeTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  return (
    <>
      <Header />
      <main className={styles.appContainer}>
        <form className={styles.inputContainer} onSubmit={handleSubmit}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">
            <PlusCircle size={16} />
            <span>Criar</span>
          </button>
        </form>

        <TaskList
          tasks={tasks}
          tasksCreated={tasksCreated}
          tasksFinished={tasksFinished}
          handleFinishedTask={finishedTask}
          handleRemoveTask={removeTask}
        />
      </main>
    </>
  )
}
