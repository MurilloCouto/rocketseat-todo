import noteImg from '../../assets/noteImg.svg'

import styles from './Empty.module.scss'

export function Empty() {

  return (
    <div className={styles.empty}>
        <img src={noteImg} alt="note image" />
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
