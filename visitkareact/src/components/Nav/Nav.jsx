import React from 'react';
import styles from './Nav.module.css'
import Dialogs from "../Dialogs/Dialogs";
import {NavLink} from "react-router-dom";

function Nav() {
  
 const setActive = ({isActive}) => 
        isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.ithem} ><NavLink to='/main' className={setActive} >Main</NavLink></li>
        <li className={styles.ithem}><NavLink to='/dialogs' className={setActive}>Message</NavLink></li>
        <li className={styles.ithem} ><NavLink to='/news' className={setActive} >News</NavLink></li>
        <li className={styles.ithem} ><NavLink to='/music' className={setActive}>Music</NavLink></li>
        <li className={styles.ithem} ><NavLink to='/settings' className={setActive}>Settings</NavLink></li>
      </ul>
    </nav>
  )
}


export default Nav;