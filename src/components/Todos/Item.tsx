import type { Todo } from "../../types/types";
import styles from './Item.module.css';

interface ItemProps {
  todo: Todo
}

export const Item = ({todo}: ItemProps) => {
  const {title, completed, category} = todo;
  const indicatorClasses = completed ? `${styles.indicator} ${styles.completed}` : styles.indicator;

  return (
    <div className={styles.item}>
      <div className={indicatorClasses} />
      <p>{title}</p>
      <b>{category}</b>
    </div>
  )
}