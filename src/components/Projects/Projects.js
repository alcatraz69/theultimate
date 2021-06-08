import { useEffect } from "react";
import styles from "./Projects.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import musicflix from "./ProjectAssets/musicflixmockup.png";
import musicmart from "./ProjectAssets/musicmartmockup.png";
import quiz from "./ProjectAssets/qmockup.png";
import dummy from "./ProjectAssets/dummy.jpg";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div className="App" id="projects">
      <h1 className={styles.projectHeading}>
        Recent <span style={{ color: "orange" }}>Projects</span>
      </h1>
      <section className={styles.contentSec}>
        <div data-aos="fade-up" className={styles.contentCard}>
          <div /*data-aos="fade-right"*/ className={styles.contentimgSec}>
            <img className={styles.contentImg} src={musicflix} alt=""></img>
          </div>
          <div /*data-aos="fade-left"*/ className={styles.contentDetailsSec}>
            <h2>MusicFlix Video Library</h2>
            <p className={styles.contentDetails}>
              This is a video library app built using MERN Stack. The App
              conists of Auth and user specific Library section which has liked
              videos and playlists of the user.
            </p>
            <div style={{ marginTop: "30px" }}>
              <a
                href="https://musicflix.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={styles.button}
              >
                Live Demo
              </a>
              <a
                href="https://musicflix.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={styles.button}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className={` ${styles.rev}`}>
          <div /*data-aos="fade-left"*/ className={styles.contentimgSec}>
            <img className={styles.contentImg} src={musicmart} alt=""></img>
          </div>
          <div /*data-aos="fade-right"*/ className={styles.contentDetailsSec}>
            <h2>MusicMart E-commerce</h2>
            <p className={styles.contentDetails}>
              This is an E-Commerce app built using MERN Stack. The App conists
              of Auth and user specific Wishlist and Cart section, The App also
              has filters that can be applied to search the ptoducts.
            </p>
            <div style={{ marginTop: "30px" }}>
              <a
                href="https://musicmart.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={styles.button}
              >
                Live Demo
              </a>
              <a
                href="https://musicmart.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={styles.button}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className={styles.contentCard}>
          <div /*data-aos="fade-right"*/ className={styles.contentimgSec}>
            <img className={styles.contentImg} src={quiz} alt=""></img>
          </div>
          <div /*data-aos="fade-left"*/ className={styles.contentDetailsSec}>
            <h2>Quizy App</h2>
            <p className={styles.contentDetails}>
              This is a fully responsive webapp, built using Typescript MERN is
              a Full-Stack webapp that hosts quiz of various interests it
              consists of Auth, user specific scoreboard and answer review
              options.
            </p>
            <div style={{ marginTop: "30px" }}>
              <a
                href="https://musicmart.netlify.app/"
                className={styles.button}
              >
                Live Demo
              </a>
              <a
                href="https://musicmart.netlify.app/"
                className={styles.button}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className={` ${styles.rev}`}>
          <div /*data-aos="fade-left"*/ className={styles.contentimgSec}>
            <img className={styles.contentImg} src={dummy} alt=""></img>
          </div>
          <div /*data-aos="fade-right"*/ className={styles.contentDetailsSec}>
            <h2>MusicFlix Video Library</h2>
            <p className={styles.contentDetails}>
              This webapp, built using HTML, CSS and vanillaJS, is a simple note
              taking app. The app uses localStorage to save the notes and hence
              they're not lost even if you close your tab/browser. The app also
              provides.
            </p>
            <div style={{ marginTop: "30px" }}>
              <a
                href="https://musicmart.netlify.app/"
                className={styles.button}
              >
                Live Demo
              </a>
              <a
                href="https://musicmart.netlify.app/"
                className={styles.button}
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
