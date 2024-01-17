import { useEffect, useState } from "react";
import { todoType } from "../../App";

import styles from "./Counter.module.scss";

interface CountProps {
  todos: todoType[];
}

export function Counter({ todos }: CountProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Calcula a contagem de tarefas concluídas
    const completedCount = todos.filter(
      (eachTodo) => eachTodo.isChecked === true
    ).length;

    // Atualiza o estado com a contagem calculada
    setCount(completedCount);
  }, [todos]); // Re-executa o efeito quando 'todos' muda

  return (
    <div className={styles.counter}>
      <p className={styles.concluidas}>
        Tarefas criadas<span>{todos.length}</span>
      </p>
      <p>
        Concluídas
        <span>
          {count} de {todos.length}
        </span>
      </p>
    </div>
  );
}
