import Link from 'next/link';

import styles from './Explore.module.sass';

export default function Explore () {
  return <Link className={styles.explore} href="/destinations"><span>Explore</span></Link>;
}
