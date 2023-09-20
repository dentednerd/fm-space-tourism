import { useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/templates/layout';
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
    <Layout className={styles.techbg} heading="03 Space Launch 101">

      <section className={styles.techcontent}>

        <section className={styles.image}>
          <div className={styles.landscape}>
            <Image src={current.images.landscape} alt={current.name} fill={true} />
          </div>

          <div className={styles.portrait}>
            <Image src={current.images.portrait} alt={current.name} fill={true} />
          </div>
        </section>

        <nav className={styles.technav}>
            {numDots}
          </nav>

        <article className={styles.techarticle}>

          <h3 className={styles.terminology}>
            The Terminology...
          </h3>

          <h1 className={styles.title}>
            {current.name}
          </h1>

          <p className={styles.description}>
            {current.description}
          </p>

        </article>

      </section>

    </Layout>
  );
}
