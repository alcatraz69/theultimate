import React from "react";
import styles from "./Blogs.module.css";
import blog1 from "./BlogAssests/blog1.png";

const Blogs = () => {
  return (
    <>
      <h1 className={styles.blogHeading}>
        Blog <span style={{ color: "orange" }}>Section</span>
      </h1>
      <div className={styles.container}>
        <div className={styles.square}>
          <img
            src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80"
            className={styles.blogImg}
            alt="blog1 pic"
          ></img>
          <div className={styles.h1}>Is Apple a Design Company?</div>
          <p className={styles.blogDesc}>
            Apple is more than a tech company; it became a culture unto itself,
            a passion of most of people and the birthplace of the world’s most
            revolutionized products.
          </p>

          <div>
            <a
              href="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261"
              target="_"
              className={styles.button}
            >
              Read More
            </a>
          </div>
        </div>
        <div className={styles.square}>
          <img src={blog1} className={styles.blogImg} alt="blog2 pic"></img>
          <div className={styles.h1}>Wonderful Web Communication!</div>
          <p className={styles.blogDesc}>
            In this blog I have explained how the communication bewteen
            computers and other devices over the internet takes place.
          </p>

          <div>
            <a
              href="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261"
              target="_"
              className={styles.button}
            >
              Read More
            </a>
          </div>
        </div>

        <div className={styles.square}>
          <img
            src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80"
            className={styles.blogImg}
            alt="blog3 pic"
          ></img>
          <div className={styles.h1}>Is Apple a Design Company?</div>
          <p className={styles.blogDesc}>
            Apple is more than a tech company; it became a culture unto itself,
            a passion of most of people and the birthplace of the world’s most
            revolutionized products.
          </p>

          <div>
            <a
              href="https://medium.com/@laheshk/is-apple-a-design-company-f5c83514e261"
              target="_"
              className={styles.button}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
