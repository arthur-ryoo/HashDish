import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dropdown.module.css';
import {
  isLoggedIn,
  isNotLoggedIn,
} from './DropdownItems/DropdownItems';

function Dropdown(props) {
  const [loggedIn] = useState(props.user);
  const [listOpen, setListOpen] = useState(false);

  const handleDropdown = (e) => {
    setListOpen(!listOpen);
    if (e.target.id === 'logout') props.handleLogout();
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleDropdown}>
        <i className="fa fa-bars"></i>
      </button>
      {listOpen ? (
        <div className={styles.list}>
          {props.user && loggedIn ? (
            <ul className={styles.test}>
              {isLoggedIn.map((item, index) => {
                return (
                  <li key={index} onClick={handleDropdown}>
                    <Link id={item.id} to={item.url}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className={styles.test}>
              {isNotLoggedIn.map((item, index) => {
                return (
                  <li key={index} onClick={handleDropdown}>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
