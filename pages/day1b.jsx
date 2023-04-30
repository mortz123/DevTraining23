import React from 'react';
import Image from 'next/image';
import styles from './day1b.module.css';

export default function Day1b() {
  return (
    <div>
      <h1>Day 1 Bonus Challenge</h1>
      <nav className={styles.nav}>
        <Image src="/vercel.svg" height={80} width={120} />
        <div className={styles.navItems}>
          <div className={styles.navItem}>Home</div>
          <div className={styles.navItem}>About</div>
          <div className={styles.navItem}>My projects</div>
          <div className={styles.navItem}>Settings</div>
        </div>
        <div className={styles.hamburger}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
      </nav>
    </div>
  );
}
