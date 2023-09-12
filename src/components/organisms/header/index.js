import { useState } from 'react';

import Hamburger from '../../atoms/hamburger';
import Logo from '../../atoms/logo';
import Menu from '../../molecules/menu';
import Nav from '../../molecules/nav';

import styles from './Header.module.sass';

export default function Header() {
  const [isMenuOpen, toggleIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
      <Hamburger toggleIsMenuOpen={toggleIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} toggleIsMenuOpen={toggleIsMenuOpen} />
    </header>
  )
}
