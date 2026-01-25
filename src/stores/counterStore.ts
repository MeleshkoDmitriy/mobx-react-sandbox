import { action, autorun, computed, makeObservable, observable, reaction, when } from "mobx";

class CounterStore {
  count = 0;
  private disposer: (() => void) | null = null; // cleanup function for autorun
  private negativeWarningDisposer: (() => void) | null = null; // cleanup function for reaction
  private whenDisposer: (() => void) | null = null; // cleanup function for when

  constructor() {
    // makeAutoObservable(this);
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      doubleCount: computed,
      isPositiveCount: computed,
      clearStorage: action,
    })

    const savedCount = localStorage.getItem('key-counter');
    if (savedCount) {
      this.count = parseInt(savedCount, 10);
    } 

    // autorun - автоматически сохраняет count в localStorage при каждом изменении
    this.disposer = autorun(() => {
      localStorage.setItem('key-counter', this.count.toString());
    })

    // reaction - отслеживает, когда count становится отрицательным
    this.negativeWarningDisposer = reaction(
      () => this.count < 0,
      (isNegative) => {
        if (isNegative) {
          alert('Counter is negative');
        }
      }
    )

    // when - выполнится один раз, когда count достигнет 10
    this.whenDisposer = when(
      () => this.count >= 10,
      () => {
        alert('Counter is greater than 10');
      }
    );
  }

  // Метод для очистки всех reactions
  dispose() {
    if (this.disposer) {
      this.disposer();
      this.disposer = null;
    }
    if (this.negativeWarningDisposer) {
      this.negativeWarningDisposer();
      this.negativeWarningDisposer = null;
    }
    if (this.whenDisposer) {
      this.whenDisposer();
      this.whenDisposer = null;
    }
  }

  // Очищает localStorage и сбрасывает count
  clearStorage = () => {
    localStorage.removeItem('key-counter');
    this.count = 0;
  }

  //
  increment = () => {
    this.count++;
  }

  decrement = () => {
    this.count--;
  }

  //
  get doubleCount() {
    return this.count * 2;
  }

  get isPositiveCount() {
    return this.count > 0;
  }
}

export default new CounterStore();