import Link from 'next/link';
import styles from './Nav.module.sass';
import data from '../../../data/data.json';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        {["Home"].concat(Object.keys(data)).map(name => (
          <li key={name}>
            <Link href={name === "Home" ? `/` : `/${name}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
