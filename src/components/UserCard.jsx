import React from 'react'
import styles from '../app/page.module.css'

const UserCard = ({user}) => {
  return (
    <div className={styles.list_item}>
        <img src={user.avatar} className={styles.user_image}></img>
        <div className={styles.user_description}>
            <h5>{`${user.first_name} ${user.last_name}`}</h5>
            <p className={styles.text}>{`${user.email}`}</p>
            <p className={styles.text}>{`${user.employment.title}`}</p>
        </div>
    </div>
  )
}

export default UserCard