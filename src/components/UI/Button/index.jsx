import classNames from 'classnames'
import styles from './Button.module.scss'

const Button = ({ text, className, onClick }) => {
  return (
    <button className={classNames(className, styles.root)} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
