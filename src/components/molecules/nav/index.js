import Link from 'next/link';
import styles from './Nav.module.sass';
import data from '../../../data/data.json';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      {["Home"].concat(Object.keys(data)).map(name => (
        <Link key={name} href={name === "Home" ? `/` : `/${name}`}>
          {name}
        </Link>
      ))}
    </nav>
  )
}
