import styles from './Dot.module.sass'

export default function Dot({ className, onClick }) {
  return <div className={`${styles.dot} ${className}`} onClick={onClick}/>
}
