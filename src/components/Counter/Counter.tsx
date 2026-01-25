import styles from './Counter.module.css';
import counterStore from "../../stores/counterStore";
import { observer } from 'mobx-react-lite';


export const Counter = observer(() => {
  const { count, increment, decrement, doubleCount, isPositiveCount } = counterStore;

  const textClasses = isPositiveCount ? styles.positive : styles.negative;
  return (
    <div>
      <h1>Counter</h1>
      <div className={styles.counter}>
        <button onClick={increment}>Increment +1</button>
        <div className={styles.results}>
          <b className={textClasses}>Result: {count}</b>
          <b className={textClasses}>Double: {doubleCount}</b>
        </div>
        <button onClick={decrement}>Decrement -1</button>
      </div>
    </div>
  )
})