import Image from 'next/image';

import styles from './Hamburger.module.sass';

import HamburgerIcon from '../../../../public/shared/icon-hamburger.svg';

export default function Hamburger({ toggleIsMenuOpen }) {
  return <Image className={styles.hamburger} src={HamburgerIcon} alt="open menu" onClick={() => toggleIsMenuOpen(true)} />
}
