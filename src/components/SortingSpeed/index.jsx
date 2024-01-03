import { useDispatch, useSelector } from 'react-redux'
import { setSortingSpeed } from '../../redux/sortProcess/slice'
import RangeInput from '../UI/RangeInput'

const SortingSpeed = () => {
  const dispatch = useDispatch()
  const sortingSpeed = useSelector(
    ({ sortProcess }) => sortProcess.sortingSpeed
  )
  const onChangeSpeed = multiplier => dispatch(setSortingSpeed(multiplier))
  return (
    <RangeInput
      value={sortingSpeed}
      title="Швидкість сортування"
      min={1}
      max={200}
      onValueChange={onChangeSpeed}
    />
  )
}

export default SortingSpeed
