import { Header } from "./components/Header";
import { Empty } from './components/list/Empty'
import { Item } from "./components/list/Item";
import { TodoForm } from "./components/list/TodoForm";

import { useState } from "react";

import styles from "./App.module.scss";

import "./global.scss";


export interface todoType {
  id: number;
  content: string;
  isChecked: boolean;
  category: string;
}

export function App() {

  const [todos, setTodos] = useState<todoType[]>([
    // {
    //   id: 1,
    //   content: 'Ir à academia',
    //   isChecked: false,
    //   category: 'Estudos',
    // },
    // {
    //   id: 2,
    //   content: 'Lavar louça',
    //   isChecked: true,
    //   category: 'Lazer',
    // },
])

function addTodos(content: string, category: string){
  const newTodos = [
    ...todos,
    {
      id: Math.floor(Math.random() * 10000),
      content,
      isChecked: false,
      category,
    },
  ];

  setTodos(newTodos)
}

function removeTodos(id: number) {
  const newTodos = [...todos];
  const filteredTodos = newTodos.filter((eachTodo) => eachTodo.id !== id);

  console.log(filteredTodos)

  setTodos(filteredTodos)
}

function completeTodos(id: number) {
  const newTodos = [...todos];
  newTodos.map((eachTodo) => 
  eachTodo.id === id ? (eachTodo.isChecked = !eachTodo.isChecked) : eachTodo 
  );

  setTodos(newTodos)
}

return (
  <div>
    <Header />

    <div className={styles.content}>
      <div className={styles.inputContainer}>
        <TodoForm addTodos={addTodos}/>
      </div>
      <div>
          {todos.length > 0 ? (
          <Item 
          todo={todos} 
          removeTodos={removeTodos}
          completeTodos={completeTodos} 
          />
        ) : (
          <Empty />
        )}
      </div>
    </div>
  </div>
)}
