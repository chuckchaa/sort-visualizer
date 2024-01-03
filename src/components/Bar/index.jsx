import styles from './Bar.module.scss'

const Bar = ({ width, height, color }) => {
  const barStyles = {
    height: `${height}px`,
    width: `${width}%`,
    backgroundColor: color,
  }
  return <div className={styles.root} style={barStyles}></div>
}

export default Bar
