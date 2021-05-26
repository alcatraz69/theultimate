import logo from './Logo/mylogo.png'
import styles from './DesktopNavMenu.module.css'
import { HashLink as Link} from 'react-router-hash-link'


const Navbar=(props)=>{
    return(
        <div className={styles.nav}>
        <div className={styles.logo}>
            <img className={styles.logo} src={logo} alt="" />
        </div>
        <div className={styles.navigationItemsDesktop}>
                <p className={`${styles.navButton} ${styles.activeDesktop}`}>
                    <Link smooth to="#home" className={styles.navButton}> Home </Link>
                </p>
                <p >
                    <Link smooth to="#about" className={styles.navButton}> About</Link>
                </p>
                <p >
                    <Link smooth to="#projects" className={styles.navButton}> Projects </Link>
                </p>
                <p >
                   <Link smooth to="#blogs" className={styles.navButton}> Blogs</Link>
                </p>
                <p >
                   <Link smooth to="#contact" className={styles.navButton}> Contact</Link>
                </p>
            </div>
            </div>
    )
}

export default Navbar