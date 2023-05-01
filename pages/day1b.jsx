import React from 'react';
// import Image from 'next/image';
import styles from './day1b.module.css';
import Image from 'next/image';

export default function Day1b() {
  return (
    <div>
      <h1>Day 1 Bonus Challenge</h1>
      <nav className={styles.nav}>
        <Image src="/vercel.svg" height={80} width={120} alt="vercel logo" />
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
      <section className={styles.heroSection}>
        <div className={styles.heroTextContainer}>
          <span className={styles.heroTextHeader}>Cars Inc.</span>
          <span className={styles.heroTextInfo}>
            The best auto mobile company in the world #1.
            The one and only, you can&apos;t even compare.

          </span>
        </div>
        <div className={styles.heroImageContainer}>
          {/* <Image src="/car.png" height={30} width={30} alt="an image of a car" /> */}
          <Image src="/car.png" fill alt="hero section image" />
        </div>
      </section>
      <section className={styles.gallerySection}>
        <div className={styles.heroTextHeader}>Gallery</div>
        <div className={styles.galleryImages}>
          <div className={styles.galleryImage}>
            <Image src="/bg1.jpg" fill alt="background 1" />
          </div>
          <div className={styles.galleryImage}>
            <Image src="/bg2.jpg" fill alt="background 2" />
          </div>
          <div className={styles.galleryImage}>
            <Image src="/bg3.jpg" fill alt="background 3" />
          </div>
        </div>
      </section>
    </div>
  );
}
