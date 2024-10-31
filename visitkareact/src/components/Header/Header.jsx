import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <a href='/main'><h1>Социальная сеть</h1></a>
            <h3>Учебный проект на <i>React</i></h3>
        </header>
    )
}

export default Header;