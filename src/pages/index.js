import Explore from '../components/atoms/explore';
import Layout from '../components/templates/layout';

import styles from './Home.module.sass';

export default function Home() {
  return (

    <Layout className={styles.home}>

      <section className={styles.homecontent}>

        <article className={styles.article}>

          <h2 className={styles.subtitle}>So, you want to travel to</h2>

          <h1 className={styles.title}>Space</h1>

          <p className={styles.text}>Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!</p>

        </article>

        <Explore />

      </section>

    </Layout>
  );
}
