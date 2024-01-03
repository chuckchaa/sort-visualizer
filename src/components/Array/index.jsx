import styles from './Array.module.scss'
import Bar from '../Bar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  selectActiveElements,
  selectAuxiliaryElements,
  selectSortedElements,
} from '../../redux/sortProcess/selectors'

const ACTIVE_COLOR = '#FF7480'
const SORTED_COLOR = '#92FE9D'
const AUXILIARY_COLOR = '#0048B4'
const DEFAULT_COLOR = '#00BBFF'

const Array = () => {
  const dispatch = useDispatch()
  const activeElements = useSelector(selectActiveElements())
  const auxiliaryElements = useSelector(selectAuxiliaryElements())
  const sortedElements = useSelector(selectSortedElements())
  const array = useSelector(({ arraySettings }) => arraySettings.array)
  const barWidth = 100 / array.length

  useEffect(() => {
    dispatch({ type: 'CONTROLS/RESET_ARRAY' })
  }, [])

  return (
    <div className={styles.root}>
      {array.map((height, index) => {
        const barColor =
          (sortedElements.includes(index) && SORTED_COLOR) ||
          (activeElements.includes(index) && ACTIVE_COLOR) ||
          (auxiliaryElements.includes(index) && AUXILIARY_COLOR) ||
          DEFAULT_COLOR
        return (
          <Bar key={index} width={barWidth} height={height} color={barColor} />
        )
      })}
    </div>
  )
}

export default Array
