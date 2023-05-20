import { Trash, Check } from '@phosphor-icons/react'

import styles from './taskItem.module.css'

export interface TaskProps {
  id: string
  description: string
  isComplete: boolean
}

interface PropsObject {
  task: TaskProps
  handleFinishedTask: (id: string) => void
  handleRemoveTask: (id: string) => void
}

export function TaskItem({
  task,
  handleFinishedTask,
  handleRemoveTask,
}: PropsObject) {
  return (
    <div className={styles.containerItemTask}>
      {task.isComplete ? (
        <button
          className={styles.btnMarkChecked}
          onClick={() => handleFinishedTask(task.id)}
        >
          <Check size={8} />
        </button>
      ) : (
        <button
          className={styles.btnMarkUnchecked}
          onClick={() => handleFinishedTask(task.id)}
        />
      )}

      {task.isComplete ? (
        <p className={styles.descriptionComplete}>{task.description}</p>
      ) : (
        <p className={styles.description}>{task.description}</p>
      )}

      <button
        className={styles.btnRemove}
        onClick={() => handleRemoveTask(task.id)}
      >
        <Trash />
      </button>
    </div>
  )
}
