import React from 'react'
import { ITarefa } from '../../../types/tarefa'
import styles from '../Lista.module.scss'

const Item = ({tarefa, tempo, selecionado, completado, id}: ITarefa) => {
  return (
        <li className={styles.item}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
  )
}

export default Item