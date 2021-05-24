import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.main_sec}>
      <h1 className={styles.sm_heading}>Hi, my name is</h1>
      <h2 className={styles.big_heading}>Prem Kantikar.</h2>
      <h3 className={styles.big_heading}>I build things for the web.</h3>
      <p className={styles.typography}>
        I'm a software engineer based in Bangalore, KA specializing in building
        (and occasionally designing) exceptional websites, applications, and
        everything in between.
      </p>
      <a href="mailto:prkantikar69@gmail.com" className={styles.email_link}>
        Get In Touch
      </a>
    </div>
  );
};

export default Landing;
