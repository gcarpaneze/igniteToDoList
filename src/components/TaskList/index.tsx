import Clipboard from '../../assets/Clipboard.svg'

import { TaskItem, TaskProps } from '../TaskItem'

import styles from './taskList.module.css'

interface PropsObject {
  tasks: TaskProps[]
  tasksCreated: number
  tasksFinished: number
  handleFinishedTask: (id: string) => void
  handleRemoveTask: (id: string) => void
}

export function TaskList({
  tasks,
  tasksCreated,
  tasksFinished,
  handleFinishedTask,
  handleRemoveTask,
}: PropsObject) {
  return (
    <div className={styles.taskListContainer}>
      <div className={styles.header}>
        <div className={styles.taskCreate}>
          <span>Tarefas criadas</span>
          <span className={styles.countTasks}>{tasksCreated}</span>
        </div>
        <div className={styles.taskFinish}>
          <span>Concluídas</span>
          {tasks.length === 0 ? (
            <span className={styles.countTasks}>{tasksFinished}</span>
          ) : (
            <span className={styles.countTasks}>
              {tasksFinished} de {tasksCreated}
            </span>
          )}
        </div>
      </div>

      {tasks.length === 0 && (
        <>
          <img src={Clipboard} alt="" />

          <h1>Você ainda não possui tarefas cadastradas</h1>
          <h2>Crie tarefas e organize seus itens a fazer</h2>
        </>
      )}

      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            handleFinishedTask={handleFinishedTask}
            handleRemoveTask={handleRemoveTask}
          />
        )
      })}
    </div>
  )
}
