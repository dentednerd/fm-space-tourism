import Link from 'next/link';
import { useRouter } from 'next/router';
import Close from '../../atoms/close';
import data from '../../../data/data.json';
import styles from './Menu.module.sass';

export default function Menu({ isMenuOpen, toggleIsMenuOpen }) {
  const router = useRouter()

  const { pathname } = router;

  const isActive = (name) => {
    if (pathname === "/" && name === "Home") return styles.active;
    if (pathname === `/${name}`) return styles.active;
    return null;
  }

  return (
    <nav className={`${styles.menu} ${isMenuOpen && styles.open}`}>
      <header className={styles.header}>
        <Close toggleIsMenuOpen={toggleIsMenuOpen} />
      </header>
      <ul className={styles.list}>
        {["Home"].concat(Object.keys(data)).map((name, i) => (
          <li key={name} className={isActive(name)}>
            <Link href={name === "Home" ? `/` : `/${name}`}>
              <span>0{i} </span>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
