import React from 'react';
import styles from'./Main.module.css'
import Mypost from './Myposts/Mypost';

function Main(props) {
    return (
        <main className={styles.main}>
        <img src='https://main-cdn.sbermegamarket.ru/big1/hlr-system/130/238/737/143/018/2/600011873876b0.jpeg'></img>
        <Mypost users={props.users} />
      </main>
    )
}

export default Main;