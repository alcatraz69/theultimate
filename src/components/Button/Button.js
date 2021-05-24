import React from 'react'
import styles from './Button.module.css'

export const Button = ({text}) => {
    return (
        <div>
            <a href="mailto:prkantikar69@gmail.com" className={styles.email_link}>
        {text}
      </a>
        </div>
    )
}
