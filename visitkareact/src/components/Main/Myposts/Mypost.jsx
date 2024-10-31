import React from 'react';
import styles from'./Mypost.module.css'
import Post from './post/Post';
import Createpost from './CreatePost/Createpost';

let users = {
  name: 'vlad',
  age: 17
}

function Mypost() {
    return (
        <div className={styles.ithem}>
          <Createpost />
          <Post name='Vlad Islav' info='Frontend'/>
         
          <Post name='Nastya' info='Пися'/>
          <Post name='Vlad Islav' info='Frontend'/>
         
          <Post name='Nastya' info='Пися'/><Post name='Vlad Islav' info='Frontend'/>
         
         <Post name='Nastya' info='Пися'/><Post name='Vlad Islav' info='Frontend'/>
         
         <Post name='Nastya' info='Пися'/>
        </div> 
    )
}

export default Mypost;