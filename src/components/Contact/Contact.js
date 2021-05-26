import React from 'react'
import  { Button } from '../Button/Button'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contactSec} id="contact">
            <h1 className={styles.contactHead}>Get In Touch</h1>
            <p className={styles.contactTxt}>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <Button text="Say Hello"/>
        </div>
    )
}

export default Contact;


