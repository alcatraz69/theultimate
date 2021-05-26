import React from 'react';
import styles from './Blogs.module.css'
import github from '../Socialicons/icons/github.svg';
import exportsvg from '../Socialicons/icons/export.svg';

const Blogs=(props)=>{
    return(
        <div className={styles.blogContainer} id="blogs">
            <h1 className={styles.blogHeading}>Blog <span style={{ color: "orange" }}>Section</span></h1>
            <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <img className={styles.cardimage} src="https://unsplash.it/800/600?image=59" alt="blog-img"/>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>
                    <h4 className={styles.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={styles.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={styles.blogiconcontainer}>
                        <img className={styles.blogicon} src={github} alt=""/>
                        <img className={styles.blogicon} src={exportsvg} alt=""/>
                    </div>
                </div>
            </div>
            
            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <img className={styles.cardimage} src="https://unsplash.it/800/600?image=82" alt="blog-img"/>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>
                    <h4 className={styles.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={styles.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={styles.blogiconcontainer}>
                        <img className={styles.blogicon} src={github} alt=""/>
                        <img className={styles.blogicon} src={exportsvg} alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <img className={styles.cardimage} src="https://unsplash.it/800/600?image=39" alt="blog-img"/>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>
                    <h4 className={styles.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={styles.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={styles.blogiconcontainer}>
                        <img className={styles.blogicon} src={github} alt=""/>
                        <img className={styles.blogicon} src={exportsvg} alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <img className={styles.cardimage} src="https://unsplash.it/800/600?image=11" alt="blog-img"/>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>
                    <h4 className={styles.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={styles.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={styles.blogiconcontainer}>
                        <img className={styles.blogicon} src={github} alt=""/>
                        <img className={styles.blogicon} src={exportsvg} alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <img className={styles.cardimage} src="https://unsplash.it/800/600?image=18" alt="blog-img"/>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>
                    <h4 className={styles.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={styles.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={styles.blogiconcontainer}>
                        <img className={styles.blogicon} src={github} alt=""/>
                        <img className={styles.blogicon} src={exportsvg} alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <img className={styles.cardimage} src="https://unsplash.it/800/600?image=69" alt="blog-img"/>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardTitle}>
                    <h4 className={styles.greytxt}>Time to Have More Fun</h4>
                    </div>
                    <div className={styles.cardText}>
                    <p>A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS </p>
                    </div>
                    <div className={styles.blogiconcontainer}>
                        <img className={styles.blogicon} src={github} alt=""/>
                        <img className={styles.blogicon} src={exportsvg} alt=""/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Blogs;