import React from 'react'
import Botao from '../Button'
import style from './Cronometro.module.scss'
import Relogio from './Relogio'

const Cronometro = () => {
  return (
    <div className={style.cronometro}>
         <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
         <Relogio />
         </div>
         <Botao>
            Começar!
         </Botao>
    </div>     
  )
}

export default Cronometro