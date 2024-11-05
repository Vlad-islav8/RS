import React from 'react';
import style from './Post.module.css'


function Post(props) {

    return (
        <div className={style.item}>
            <div className={style.info}>
                <a href='/dialogs' className={style.header}>
                    <img src={props.ava}/>
                        <h2>{props.name}</h2>
                </a>
                <h3>{props.headInfo}</h3>
                <p>{props.info}</p>
            </div>
            <i>{Date()}</i>
        </div>
    )
    }

    export default Post;