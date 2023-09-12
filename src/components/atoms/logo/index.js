import Image from 'next/image';

import LogoIcon from '../../../../public/shared/logo.svg';

export default function Logo() {
  return <Image src={LogoIcon} alt="Space Tourism" />
}
