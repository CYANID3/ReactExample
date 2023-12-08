import React from 'react'
import styles from './Card.module.css'
import Title from '../Title/Title'

function Card({uname}) {
  return (
    <div className={styles.card}>
        <Title text={uname}/>
    </div>
  )
}

export default Card