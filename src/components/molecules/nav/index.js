import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Nav.module.sass';
import data from '../../../data/data.json';

export default function Nav() {
  const router = useRouter()

  const { pathname } = router;

  const isActive = (name) => {
    if (pathname === "/" && name === "Home") return styles.active;
    if (pathname === `/${name}`) return styles.active;
    return null;
  }

  return (
    <nav className={styles.nav}>
      {["Home"].concat(Object.keys(data)).map((name,i) => (
        <Link key={name} className={`${styles.link} ${isActive(name)}`} href={name === "Home" ? `/` : `/${name}`}>
          <p><span className={styles.number}>0{i}</span> {name}</p>
        </Link>
      ))}
    </nav>
  )
}
