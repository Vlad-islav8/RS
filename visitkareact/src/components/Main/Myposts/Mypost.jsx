import React from 'react';
import styles from'./Mypost.module.css'
import Post from './post/Post';
import Createpost from './CreatePost/Createpost';

let users = {
  name: 'vlad',
  age: 17
}

function Mypost(props) {



    let newPostsData = props.users.map((el) => {
        return (
            <Post ava={el.ava} name={el.name} info={el.info} HeadInfo={el.headInfo}/>
        )
    })


    return (
        <div className={styles.ithem}>
          <Createpost />
            {newPostsData}

        </div> 
    )
}

export default Mypost;