import { action, computed, makeObservable, observable } from "mobx";

class CounterStore {
  count = 0;

  constructor() {
    // makeAutoObservable(this);
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      doubleCount: computed,
      isPositiveCount: computed,
    })
  }

  increment = () => {
    this.count++;
  }

  decrement = () => {
    this.count--;
  }

  get doubleCount() {
    return this.count * 2;
  }

  get isPositiveCount() {
    return this.count > 0;
  }
}

export default new CounterStore();