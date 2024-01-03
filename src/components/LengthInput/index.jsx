import { useDispatch, useSelector } from 'react-redux'
import styles from './LengthInput.module.scss'
import RangeInput from '../UI/RangeInput'
import { calculateMaxLength } from '../../utils'

const LengthInput = () => {
  const dispatch = useDispatch()
  const arrayLength = useSelector(
    ({ arraySettings }) => arraySettings.arrayLength
  )
  const inProgress = useSelector(({ sortProcess }) => sortProcess.inProgress)

  const onChangeLength = value =>
    dispatch({ type: 'CONTROLS/SET_ARRAY_LENGTH', value })

  return (
    <RangeInput
      value={arrayLength}
      title={`Довжина масиву [${arrayLength}]`}
      min={15}
      max={calculateMaxLength()}
      disabled={inProgress}
      wrapperClassName={styles.range}
      onValueChange={onChangeLength}
    />
  )
}

export default LengthInput
