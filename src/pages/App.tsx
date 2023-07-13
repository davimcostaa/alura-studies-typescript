import Cronometro from "../components/Cronometro";
import Formulario from "../components/Form";
import Lista from "../components/Lista";
import styles from './style.module.scss'
import { useState } from 'react'
import { ITarefa } from "../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={styles.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
