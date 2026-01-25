import { action, makeAutoObservable, runInAction } from "mobx";
import type { Todo } from "../types/types";
import axios from "axios";

const BASE_URL = 'https://todo-express-back.vercel.app/api'

class TodosStore {
  todos: Todo[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  // fetchTodos = () => {
  //   this.isLoading = true;

  //   axios
  //     .get(`${BASE_URL}/todos`)
  //     .then((res) => {
  //     runInAction(() => {
  //       const todos = res.data;
  //       this.todos = todos;
  //     })
  //   }).catch((err) => {
  //     console.warn('err', err.message);
  //   }).finally(() => {
  //     runInAction(() => {
  //       this.isLoading = false;
  //     })
  //   })
  // }

  fetchTodos = action(async() => {
    this.isLoading = true;

    try {
      const response = await axios.get(`${BASE_URL}/todos`);
      this.todos = response.data;
    } catch (error) {
      console.warn('error', error);
    } finally {
      this.isLoading = false;
    }
  })
}

export default new TodosStore();