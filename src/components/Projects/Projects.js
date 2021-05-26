import { useEffect } from "react";
import styles from "./Projects.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div className="App" id="projects">
      <h1 className={styles.projectHeading}>
        Recent <span style={{ color: "orange" }}>Projects</span>
      </h1>
      <section className={styles.contentSec }>
        <div data-aos="fade-up" className={styles.contentCard}>
          <div /*data-aos="fade-right"*/ className={styles.contentimgSec}>
            <img
              className={styles.contentImg}
              src="https://picsum.photos/id/9/500/350"
              alt=""
            ></img>
          </div>
          <div /*data-aos="fade-left"*/ className={styles.contentDetailsSec}>
            <h2>MusicMart E-commerce</h2>
            <p className={styles.contentDetails}>
              This webapp, built using HTML, CSS and vanillaJS, is a simple note
              taking app. The app uses localStorage to save the notes and hence
              they're not lost even if you close your tab/browser. The app also
              provides.
            </p>
            <button>Live Demo</button>
            <button>Source Code</button>
          </div>
        </div>

        <div data-aos="fade-up" className={`${styles.contentCard} ${styles.rev}`}>
          <div /*data-aos="fade-left"*/ className={styles.contentimgSec}>
            <img
              className={styles.contentImg}
              src="https://picsum.photos/id/8/500/350"
              alt=""
            ></img>
          </div>
          <div /*data-aos="fade-right"*/ className={styles.contentDetailsSec}>
            <h2>MusicFlix Video Library</h2>
            <p className={styles.contentDetails}>
              This webapp, built using HTML, CSS and vanillaJS, is a simple note
              taking app. The app uses localStorage to save the notes and hence
              they're not lost even if you close your tab/browser. The app also
              provides.
            </p>
            <button>Live Demo</button>
            <button>Source Code</button>
          </div>
        </div>

        <div data-aos="fade-up" className={styles.contentCard}>
          <div /*data-aos="fade-right"*/ className={styles.contentimgSec}>
            <img
              className={styles.contentImg}
              src="https://picsum.photos/id/11/500/350"
              alt=""
            ></img>
          </div>
          <div /*data-aos="fade-left"*/ className={styles.contentDetailsSec}>
            <h2>Project Name</h2>
            <p className={styles.contentDetails}>
              This webapp, built using HTML, CSS and vanillaJS, is a simple note
              taking app. The app uses localStorage to save the notes and hence
              they're not lost even if you close your tab/browser. The app also
              provides.
            </p>

            <button>Live Demo</button>
            <button>Source Code</button>
          </div>
        </div>

        <div data-aos="fade-up" className={`${styles.contentCard} ${styles.rev}`}>
          <div /*data-aos="fade-left"*/ className={styles.contentimgSec}>
            <img
              className={styles.contentImg}
              src="https://picsum.photos/id/8/500/350"
              alt=""
            ></img>
          </div>
          <div /*data-aos="fade-right"*/ className={styles.contentDetailsSec}>
            <h2>MusicFlix Video Library</h2>
            <p className={styles.contentDetails}>
              This webapp, built using HTML, CSS and vanillaJS, is a simple note
              taking app. The app uses localStorage to save the notes and hence
              they're not lost even if you close your tab/browser. The app also
              provides.
            </p>
            <button>Live Demo</button>
            <button>Source Code</button>
          </div>
        </div>
      </section>
    </div>
  );
}
