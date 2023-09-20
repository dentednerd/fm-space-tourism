import Header from '../../organisms/header';
import styles from './Layout.module.sass';

export default function Layout({ children, className, heading }) {
  const pageNum = heading?.split(" ")[0];
  const subtitle = heading?.split(" ").slice(1).join(" ");

  return (
    <div className={`${styles.layout} ${className}`}>

      <Header />

      {heading && (
        <h2 className={styles.heading}>
          <span>{pageNum}</span> {subtitle}
        </h2>
      )}

      <main className={styles.main}>
        {children}
      </main>

    </div>
  )
}
