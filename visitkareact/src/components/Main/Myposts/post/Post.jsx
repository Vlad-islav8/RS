import React from 'react';
import Poststyle from'./Post.module.css'



function Post(props) {

    return (
      <div className={Poststyle.post}>
        <h2>Привет, я {props.name}</h2>
        <p>и я {props.info}</p>
        <i>{Date()}</i>
        
      </div>
    )
}

export default Post;