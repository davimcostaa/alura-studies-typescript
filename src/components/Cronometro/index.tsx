import React from 'react'
import { useState, useEffect } from 'react'
import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefa } from '../../types/tarefa'
import Botao from '../Button'
import style from './Cronometro.module.scss'
import Relogio from './Relogio'

interface Props {
  selecionado: ITarefa | undefined
  finalizarTarefa: () => void
}

const Cronometro = ({ selecionado, finalizarTarefa }: Props) => {

  const [tempo, setTempo] = useState<number>();
  const [botaoAtivado, setBotaoAtivado] = useState(false)
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if(selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado?.tempo))
    }

  }, [selecionado])

  function regressiva(contador: number = 0) {
    setBotaoAtivado(true)
      const timeOut = setTimeout(() => {
        if(contador > 0) {
          setTempo(contador - 1)
          return regressiva(contador - 1)
        }
        finalizarTarefa() 
        setBotaoAtivado(false)
      }, 1000)
      setTimerId(timeOut)
  }
  
  function pararRegressiva() {
    clearTimeout(String(timerId));
  }

  return (
    <div className={style.cronometro}>
         <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
         
      <div className={style.relogioWrapper}>
         <Relogio tempo={tempo} />
      </div>

      <div className={style.botoesWrapper}>
 

        {
          selecionado
          ?
          <Botao onClick={() => regressiva(tempo)}  >
              {
                selecionado && !botaoAtivado
                ?
                "Começar!"
                :
                "Continuar!"
              }
          </Botao>
          : 
          ''
        }

        {
          botaoAtivado && selecionado
          ?
          <Botao onClick={pararRegressiva}>
            Pausar
          </Botao>
          :
          ''
        }
         </div>
    </div>     
  )
}

export default Cronometro