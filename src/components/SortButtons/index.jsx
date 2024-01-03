import { useDispatch } from 'react-redux'
import { Button } from '../UI'
import styles from './SortButtons.module.scss'
const SortButtons = () => {
  const dispatch = useDispatch()
  const onQuickSort = () => dispatch({ type: 'SORTING/QUICK_SORT' })
  const onMergeSort = () => dispatch({ type: 'SORTING/MERGE_SORT' })
  const onShakerSort = () => dispatch({ type: 'SORTING/SHAKER_SORT' })

  return (
    <div className={styles.root}>
      <Button text="Швидке сортування" onClick={onQuickSort} />
      <Button text="Сортування злиттям" onClick={onMergeSort} />
      <Button text="Сортування змішуванням" onClick={onShakerSort} />
    </div>
  )
}

export default SortButtons
