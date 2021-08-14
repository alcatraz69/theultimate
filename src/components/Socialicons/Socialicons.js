import styles from "./Socialicons.module.css";
import github from "./icons/github.svg";
import twitter from "./icons/twitter.svg";
import instagram from "./icons/instagram.svg";
import codesand from "./icons/codesandbox.svg";
import linkd from "./icons/linkedin.svg";

const Socialicons = () => {
  return (
    <div>
      <ul className={styles.iList}>
        <li className={styles.icon}>
          <a
            href="https://github.com/alcatraz69"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="" />
          </a>
        </li>

        <li className={styles.icon}>
          <a
            href="https://twitter.com/prem_kantikar_"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="" />
          </a>
        </li>

        <li className={styles.icon}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} alt="" />
          </a>
        </li>

        <li className={styles.icon}>
          <a href="https://codesandbox.com" target="_blank" rel="noreferrer">
            <img src={codesand} alt="" />
          </a>
        </li>

        <li className={styles.icon}>
          <a
            href="https://www.linkedin.com/in/prem-kantikar-849a28131/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkd} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socialicons;
