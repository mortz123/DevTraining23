import React from 'react';
import styles from './day1.module.css';

export default function Day1() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1Class}>Fix the Website Challenge - Mor</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Section 1</h2>
          <div className={styles.columnContainer}>
            <div className={styles.box}>Box 1</div>
            <div className={styles.box}>Box 2</div>
            <div className={styles.box}>Box 3</div>
            <div className={styles.box}>Box 4</div>
          </div>
        </section>
        <section className={styles.section}>
          <h2>Section 2</h2>
          <div className={styles.rowContainer}>
            <div className={styles.box}>Box 5</div>
            <div className={styles.box}>Box 6</div>
            <div className={styles.box}>Box 7</div>
            <div className={styles.box}>Box 8</div>
          </div>
        </section>
      </main>
    </div>
  );
}
