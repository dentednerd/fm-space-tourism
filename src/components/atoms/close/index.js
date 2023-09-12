import Image from 'next/image';
import styles from './Close.module.sass';
import CloseIcon from '../../../../public/shared/icon-close.svg';

export default function Close({ toggleIsMenuOpen }) {
  return <Image className={styles.close} src={CloseIcon} alt="close menu" onClick={() => toggleIsMenuOpen(false)} />
}
