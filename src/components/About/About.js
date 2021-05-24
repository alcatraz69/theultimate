import { useEffect } from "react";
import styles from "./About.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <div data-aos="fade-up" className={styles.aboutSec}>
        <div /*data-aos="fade-right"*/ className={styles.aboutImgSec}>
          <img
            className={styles.aboutImg}
            src="https://picsum.photos/id/15/450/500"
            alt=""
          ></img>
        </div>
        <div /*data-aos="fade-left"*/ className={styles.aboutDes}>
          <h1>About Me</h1>
          <p>
            I am a Frontend Developer, looking for a role in an exciting
            company. I focus on writing accessible HTML, using modern CSS
            practices and JavaScript. When writing JavaScript, I prefer React,
            but I am open to adapting whichever framework is required. I've also
            had experience working with Android.
            <br />
            <br />I believe Project Based Learning is the best approach to learn
            anything. Hence, I've got projects in all the different technologies
            that.
            <br />
            <br />
            Here are a few technologies I've have been working with recently :
          </p>
          <ul>
            <li className={styles.listElement}>Html & CSS</li>
            <li className={styles.listElement}>JavaScript</li>
            <li className={styles.listElement}>React JS</li>
            <li className={styles.listElement}>Node Js</li>
            <li className={styles.listElement}>Express</li>
            <li className={styles.listElement}>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
