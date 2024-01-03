import LengthInput from '../LengthInput'
import ResetButton from '../ResetButton'
import SortButtons from '../SortButtons'
import SortingSpeed from '../SortingSpeed'
import styles from './Controls.module.scss'

const Controls = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root__buttons}>
        <ResetButton />
        <SortButtons />
      </div>
      <div className={styles.root__controls}>
        <LengthInput />
        <SortingSpeed />
      </div>
    </div>
  )
}

export default Controls
