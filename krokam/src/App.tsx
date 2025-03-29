
import styles from './App.module.css'
import {Header} from "./components/Header/Header.tsx";
import {Main} from "./components/Main/Main.tsx";
import {Footer} from "./components/Footer/Footer.tsx";

function App() {

  return (
    <div className={styles.appContainer}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
