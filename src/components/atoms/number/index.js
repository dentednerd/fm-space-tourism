import styles from './Number.module.sass';

export default function Number({ className, number , onClick}) {
  return <div className={`${styles.number} ${className}`} onClick={onClick}>{number}</div>
}
