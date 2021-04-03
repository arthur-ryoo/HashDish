import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={styles.container}>
      <p>HashDish &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
