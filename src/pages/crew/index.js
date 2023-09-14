import { useState } from 'react';
import Image from 'next/image';
import Dot from '../../components/atoms/dot';
import Header from '../../components/organisms/header';
import data from '../../data/data.json';
import styles from './Crew.module.sass';

export default function Crew() {
  const [index, setIndex] = useState(0);

  const current = data.crew[index];

  const dots = [0,1,2,3].map((i) => (
    <Dot key={i} className={i === index && styles.active} onClick={() => setIndex(i)} />
  ))

  return (
    <main className={styles.crew}>
      <Header/ >

      <section>
        <h2 className="page-heading"><span>02</span> Meet Your Crew</h2>
      </section>

      <section className={styles.image}>
        <Image src={current.images.webp} alt={current.name} width={224} height={224} />
      </section>

      <nav className={styles.crewnav}>
        {dots}
      </nav>

      <article className={styles.article}>
        <h3 className={styles.role}>{current.role}</h3>

        <h1 className={styles.name}>{current.name}</h1>

        <p className="bio">{current.bio}</p>
      </article>

    </main>
  );
}
