import { useEffect } from "react";
import styles from "./Projects.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import musicflix from "./ProjectAssets/musicflixmockup.png";
import musicmart from "./ProjectAssets/musicmartmockup.png";

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
            <button>Live Demo</button>
            <button>Source Code</button>
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

        <div data-aos="fade-up" className={` ${styles.rev}`}>
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
