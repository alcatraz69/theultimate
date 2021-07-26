import React from "react";
import styles from "./Blogs.module.css";
import blog1 from "./BlogAssests/blog1.png";
import blog2 from "./BlogAssests/asyncawaitjs.jpg";
import blog3 from "./BlogAssests/opc.jpg";

const Blogs = () => {
  return (
    <div id="blogs">
      <h1 className={styles.blogHeading}>
        Blog <span style={{ color: "orange" }}>Section</span>
      </h1>
      <div className={styles.container}>
        <div className={styles.square}>
          <img src={blog1} className={styles.blogImg} alt="blog2 pic"></img>
          <div className={styles.h1}>
            Wonderful Web Communication! Connecting to the Internet
          </div>
          <p className={styles.blogDesc}>
            In this blog I have explained how the communication bewteen
            computers and other devices over the internet takes place.
          </p>

          <div className={styles.btnSec}>
            <a
              href="https://hashnode.com/post/wonderful-web-communication-ckqmdafwu04pbs2s1ctucb66r"
              target="_"
              className={styles.button}
            >
              Read More
            </a>
          </div>
        </div>
        <div className={styles.square}>
          <img src={blog2} className={styles.blogImg} alt="blog1 pic"></img>
          <div className={styles.h1}>Asynchronous Javascript - Async/Await</div>
          <p className={styles.blogDesc}>
            Async/Await pattern is a syntactic feature of Javascript language
            that allows an asynchronous, blocking function to be structured in a
            way similar to an ordinary synchronous function.
          </p>

          <div className={styles.btnSec}>
            <a
              href="https://hashnode.com/post/asynchronous-javascript-asyncawait-ckr2e58oq0mwvpts1cr4r7jqx"
              target="_"
              className={styles.button}
            >
              Read More
            </a>
          </div>
        </div>

        <div className={styles.square}>
          <img
            // src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1c8fe0c9197d66232511525bfd1cc82&auto=format&fit=crop&w=1100&q=80"
            src={blog3}
            className={styles.blogImg}
            alt="blog3 pic"
          ></img>
          <div className={styles.h1}>Optional Chaining - Javascript ES2020</div>
          <p className={styles.blogDesc}>
            The optional chaining operator provides a way to simplify accessing
            values through connected objects when it's possible that a reference
            or function may be undefined or null .
          </p>

          <div className={styles.btnSec}>
            <a
              href="https://hashnode.com/post/optional-chaining-javascript-es2020-ckr549zk4033rrfs10olr85h0"
              target="_"
              className={styles.button}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
