import React from "react";
import styles from './Usermessage.module.css'

let messages = ['hi', 'член', 'СосиБакаСимулейтер', 'Трусы снимаю']

let iMes = messages.map((el) => {
    return `Сообщение: ${el}`
})

function Usermessage(props) {
    return (
        <div className={styles.ithem}>
            <div className={styles.head}>
                <a href='#'>
                    <img
                        src={props.ava}/>
                    <h2>{props.name}</h2>
                </a>


            </div>
            <p>{props.message} <br/> {iMes[props.idMes]}</p>


        </div>
    )
}

export default Usermessage;