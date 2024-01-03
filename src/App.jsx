import styles from './App.module.scss'
import Array from './components/Array'

import Controls from './components/Controls'

function App() {
  return (
    <div className={styles.root}>
      <Controls />
      <Array />
    </div>
  )
}

export default App
