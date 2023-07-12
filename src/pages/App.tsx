import Formulario from "../components/Form";
import Lista from "../components/Lista";
import styles from './style.module.scss' 

function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
