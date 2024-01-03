import styles from './ResetButton.module.scss'

import { useDispatch } from 'react-redux'

import { Button } from '../UI'

const ResetButton = () => {
  const dispatch = useDispatch()
  const onClick = () => dispatch({ type: 'CONTROLS/RESET_ARRAY' })
  return (
    <Button
      text="Перестворити масив"
      disabled={false}
      onClick={onClick}
      className={styles.root}
    />
  )
}

export default ResetButton
