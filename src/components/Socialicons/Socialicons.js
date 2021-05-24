import styles from "./Socialicons.module.css";
import github from "./icons/github.svg";
import twitter from "./icons/twitter.svg";
import instagram from "./icons/instagram.svg";
import codesand from "./icons/codesandbox.svg";
import linkd from "./icons/linkedin.svg";

const Socialicons = (props) => {
  return (
    <div>
      <ul className={styles.iList}>
        <li className={styles.icon}>
          <img src={github} alt="" />
        </li>

        <li className={styles.icon}>
          <img src={twitter} alt="" />
        </li>

        <li className={styles.icon}>
          <img src={instagram} alt="" />
        </li>

        <li className={styles.icon}>
          <img src={codesand} alt="" />
        </li>

        <li className={styles.icon}>
          <img src={linkd} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Socialicons;
