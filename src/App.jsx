import Home from "./Components/Main/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import styles from './app.module.css'

export default function App() {
  return (
    <div className={styles.mainContainer}>
      <Sidebar />
      <Home />
    </div>
  )
}
