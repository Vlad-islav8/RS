import React from "react";
import { NavLink } from "react-router-dom";
import styles from './UserIthem.module.css'

function Userithem(props) {
    return (
        <div className={styles.ithem}>
            <NavLink 
                to={`/dialogs/${props.userid}`}  // Изменен путь
                className={({ isActive }) => 
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                <h2>{props.name}</h2>
                <img
                    src={props.ava}
                    width='64' height='64' alt='img'/>
            </NavLink>
        </div>
    )
}

export default Userithem