import React from 'react';
import styles from'./Createpost.module.css'

function Createpost() {
    return (
    <div>
        <form>
            <div className={styles.output}>
                <input className={styles.inputHead} type="text" placeholder='Заголовок поста' />
                <textarea id="Textpost" placeholder='Напишите пост'></textarea>
                <input  type="file" />
            </div>
            <input type="submit" value='Опубликовать'/>
        </form>
    </div>
    )
    
}

export default Createpost;