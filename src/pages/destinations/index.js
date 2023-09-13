import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/organisms/header';
import data from '../../data/data.json';
import styles from './Destinations.module.sass';

export default function Destinations() {
  const [index, setIndex] = useState(0);

  const current = data.destinations[index];

  const names = data.destinations.map((dest) => dest.name);

  return (
    <main className={styles.destinations}>
      <Header/ >

      <section>
        <h2><span className="fw-700 translucent">01</span> Pick Your Destination</h2>
      </section>

      <section className={styles.image}>
        <Image src={current.images.png} alt={current.name} width={170} height={170} />
      </section>

      <nav className={styles.selector}>
        {names.map((name, i) => (
          <span key={name} className={index === i && styles.underline} onClick={() => setIndex(i)}>{name}</span>
        ))}
      </nav>

      <article>

        <section>
          <h1>{current.name}</h1>
          <p>{current.description}</p>
        </section>

        <section className={styles.bordertop}>
          <section>
            <p className={styles.subproperty}>Avg. Distance</p>
            <p className={styles.subvalue}>{current.distance}</p>
          </section>

          <section>
            <p className={styles.subproperty}>Est. Travel Time</p>
            <p className={styles.subvalue}>{current.travel}</p>
          </section>
        </section>

      </article>
    </main>
  );
}
