import classNames from 'classnames'
import styles from './RangeInput.module.scss'

const RangeInput = ({
  value,
  title,
  min,
  max,
  disabled,
  wrapperClassName,
  onValueChange,
}) => {
  const onInput = value => {
    if (disabled) {
      return
    }

    onValueChange(value)
  }
  return (
    <div className={classNames(styles.root, 'wrapper', wrapperClassName)}>
      {title && <div className={styles.title}>{title}</div>}
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onInput={event => onInput(Number(event.target.value))}
        className={styles.input}
        disabled={disabled}
      />
    </div>
  )
}

export default RangeInput
