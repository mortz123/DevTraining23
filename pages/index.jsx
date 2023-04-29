import React from 'react';
import styles from './index.module.css';
import TableOfContent from '../components/TableOfContent';

export default function Index() {
  const days = [
    'Day 1 - Introduction',
    'Day 2 - HTML',
  ];
  return (
    <div className={styles.container}>
      <h1>Dev&apos;s Team 2023 Basic Training</h1>
      <h2>
        We&apos;re learning how to build a full-stack web application with Eyal
      </h2>
      <TableOfContent days={days} />
    </div>
  );
}
