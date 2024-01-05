import { todoType } from "../../App"

import { Trash } from 'phosphor-react'

import styles from './Item.module.scss'

interface ItemProps {
    todo: todoType[];
    removeTodos: (id: string) => void;
    completeTodos: (id: string) => void;
}

export function Item({todo, removeTodos, completeTodos}: ItemProps) {
    return (
        <div className={styles.itemList}>
            {todo.map((eachTodo: todoType) => (
                <div 
                    key={eachTodo.id}
                    className={styles.item}
                >
                    <input 
                        type='checkbox' 
                        onClick={() => completeTodos(eachTodo.id)}
                    />
                    <p 
                        className={styles.content}
                        style={{textDecoration: eachTodo.isChecked === true ? "line-through" : ''}}
                    >
                        {eachTodo.content}
                    </p>
                    <p 
                    key={`${eachTodo.id}_category`}
                    className={styles.category}>
                        {eachTodo.category}
                    </p>
                    <button 
                        className={styles.buttonTrash} 
                        onClick={() => removeTodos(eachTodo.id)}>
                        <Trash size={20}/>
                    </button>
                </div>
            ))}
        </div>
    )
}