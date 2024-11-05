import React from 'react';
import styles from './Dialogs.module.css'
import userIthem from "./DialogUsers/UserIthem/UserIthem";
import Userithem from "./DialogUsers/UserIthem/UserIthem";
import Dialogusers from "./DialogUsers/Dialoguswes";
import {NavLink, Route, Routes} from "react-router-dom";
import Usermessage from "./Usermessage/Usermessage";



function Dialogs(props) {

    let NewuserData = props.userData.map(el => {
        let i = -1;
        i++
         return (<Usermessage idMes={i}  name={el.name} message={el.mess} ava={el.ava}/>)
    })

    const UsermessageData = [
        NewuserData,
    ]


    return (
        <div className={styles.dialog__content}>
            <div className={styles.dialogUsers}>
                <h1>Messages</h1>
                <Dialogusers users={props.userData}/>
            </div>
            <div className={styles.dialogMessage}>
                {UsermessageData}
            </div>
        </div>
    )
}

export default Dialogs;