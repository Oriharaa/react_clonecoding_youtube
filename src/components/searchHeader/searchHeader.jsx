import React, { useRef } from 'react';
import styles from './searchHeader.module.css';
import '@fortawesome/fontawesome-free/js/all.js';

const SearchHeader = ({onSearch}) => {

  const inputRef = useRef();

  const handleSearch = () =>{
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) =>{
    if(event.key === 'Enter'){
      handleSearch();
    }
  };

  const onClick = () =>{
    handleSearch();
  };


  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img className={styles.logo__img} src="./images/logo.png" alt="logo" />
        <h1 className={styles.logo__title}>Premium</h1>
      </a>
      <input className={styles.input} ref={inputRef} type="seacrh" onKeyPress={onKeyPress}  placeholder="Search..." />
      <button className={styles.button} type="submit" onClick={onClick}>
        <i className="fas fa-search"></i>
      </button>
    </header>
  );
};

export default SearchHeader;