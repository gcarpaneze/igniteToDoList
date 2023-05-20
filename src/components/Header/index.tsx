import logoTodo from '../../assets/Logo- todo.svg'

import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logoTodo} alt="" />
    </header>
  )
}
