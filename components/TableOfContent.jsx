import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './TableOfContent.module.css';

function TableOfContent({ days }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Table of Content</h3>
      <ul className={styles.list}>
        {days.map((day, index) => (
          <li key={day} className={styles.listItem}>
            <Link href={`/day${index + 1}`}>
              {day}
              {/* <a className={styles.link}>{day}</a> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

TableOfContent.propTypes = {
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableOfContent;
