import React from 'react';
import styles from './searchHeader.module.css';
import '@fortawesome/fontawesome-free/js/all.js';

const searchHeader = (props) => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img className={styles.logo__img} src="./images/logo.png" alt="logo" />
        <h1 className={styles.logo__title}>Premeium</h1>
      </a>
      <input className={styles.input} type="seacrh" placeholder="Search..." />
      <button className={styles.button} type="submit">
        {/* <img src="/images/search.png" alt="seacrh" /> */}
        <i className="fas fa-search"></i>
      </button>
    </header>
  );
};

export default searchHeader;