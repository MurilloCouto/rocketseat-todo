import { PlusCircle } from 'phosphor-react'

import styles from './TodoForm.module.scss'

import { useState } from 'react'

type TodoFormProps = {
    addTodos: (content: string, category: string) => void
}

export function TodoForm({ addTodos }: TodoFormProps ) {

    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    function handleSubmit (e: React.FormEvent){
        e.preventDefault();

        if(!value || !category) return;
        addTodos(value, category)
        setValue('')
        setCategory('')
    }

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
               <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa...' 
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    maxLength={32}
                />
                <p className={styles.count}>Caracteres restantes: {32 - value.length}</p>
                <select 
                className={styles.select}
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Tarefa doméstica">Tarefa doméstica</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                </select>
                
                <button 
                className={styles.buttonAddTask} 
                type="submit"
                >
                <p>Criar</p>  
                {''} 
                <PlusCircle size={20}/>
                </button> 
                </form>
        </div>
    )
}