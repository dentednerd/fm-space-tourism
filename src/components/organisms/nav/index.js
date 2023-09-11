import styles from './Nav.module.sass';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>00 Home</li>
        <li>01 Destination</li>
        <li>02 Crew</li>
        <li>03 Technology</li>
      </ul>
    </nav>
  )
}
