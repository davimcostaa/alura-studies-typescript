import React from 'react'
import styles from './Lista.module.scss' 

const Lista = () => {

    const tarefas = [
    {
        tarefa: 'React',
          tempo: '02:00:00'
      }, 
      {
        tarefa: 'Javascript',
          tempo: '01:00:00'
      },
      {
        tarefa: 'TypeScript',
          tempo: '01:00:00'
      },
    
    ]

  return (
    <aside className={styles.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            { tarefas.map((item, index) => (
                <li key={index} className={styles.item}>
                    <h3>
                        {item.tarefa}
                    </h3>
                    <span>
                        {item.tempo}
                    </span>
                </li>
                
            )) }
        </ul>
    </aside>
  )
}

export default Lista