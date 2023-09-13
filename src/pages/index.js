import Explore from '../components/atoms/explore';
import Header from '../components/organisms/header';

import styles from './Home.module.sass';

export default function Home() {
  return (
    <main className={styles.home}>
      <Header />

      <section>
        <h2>So, you want to travel to</h2>
      </section>

      <section>
        <h1>Space</h1>
      </section>

      <section>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world experience!</p>
      </section>

      <section>
        <Explore />
      </section>

    </main>
  );
}
