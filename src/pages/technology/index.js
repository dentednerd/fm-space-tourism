import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/organisms/header';
import Number from '../../components/atoms/number';
import data from '../../data/data.json';
import styles from "./Technology.module.sass";

export default function Technology() {
  const [index, setIndex] = useState(0);

  const current = data.technology[index];

  const numDots = data.technology.map((_, i) => (
    <Number key={i} className={i === index && styles.active} onClick={() => setIndex(i)} number={i + 1} />
  ))

  return (
    <main className={styles.technology}>
      <Header/ >

      <section>
        <h2 className="page-heading"><span>03</span> Space Launch 101</h2>
      </section>

      <div className={styles.image}>
        <Image src={current.images.landscape} alt={current.name} width={375} height={211}/>
      </div>

      <nav className={styles.technav}>
        {numDots}
      </nav>

      <article className={styles.techarticle}>
        <h3>The Terminology...</h3>
        <h1>{current.name}</h1>
        <p>{current.description}</p>
      </article>
    </main>
  );
}
