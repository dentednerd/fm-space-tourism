import Link from 'next/link';
import Close from '../../atoms/close';
import data from '../../../data/data.json';
import styles from './Menu.module.sass';

export default function Menu({ isMenuOpen, toggleIsMenuOpen }) {
  return (
    <nav className={`${styles.menu} ${isMenuOpen && styles.open}`}>
      <header>
        <Close toggleIsMenuOpen={toggleIsMenuOpen} />
      </header>
      <ul className={styles.list}>
        {["Home"].concat(Object.keys(data)).map((name, i) => (
          <li key={name}>
            <Link href={name === "Home" ? `/` : `/${name}`}>
              <span className="fw700">0{i} </span>
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
