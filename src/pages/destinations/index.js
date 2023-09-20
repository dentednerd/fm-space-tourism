import { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/templates/layout';
import data from '../../data/data.json';
import styles from './Destinations.module.sass';

export default function Destinations() {
  const [index, setIndex] = useState(0);

  const current = data.destinations[index];

  const names = data.destinations.map((dest) => dest.name);

  return (
    <Layout className={styles.destinations} heading="01 Pick Your Destination">

      <section className={styles.destcontent}>

        <section className={styles.image}>
          <Image src={current.images.png} alt={current.name} fill={true} />
        </section>


        <article className={styles.destarticle}>

          <nav className={styles.destnav}>
            {names.map((name, i) => (
              <span key={name} className={index === i && styles.active} onClick={() => setIndex(i)}>{name}</span>
            ))}
          </nav>

          <section>
            <h1 className={styles.name}>
              {current.name}
            </h1>

            <p className={styles.description}>
              {current.description}
            </p>
          </section>


          <section className={styles.statistics}>

            <section>
              <p className={styles.property}>Avg. Distance</p>
              <p className={styles.value}>{current.distance}</p>
            </section>

            <section>
              <p className={styles.property}>Est. Travel Time</p>
              <p className={styles.value}>{current.travel}</p>
            </section>

          </section>

        </article>

      </section>

    </Layout>
  );
}
