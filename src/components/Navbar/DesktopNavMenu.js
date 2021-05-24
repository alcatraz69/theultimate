import logo from './Logo/mylogo.png'
import styles from './DesktopNavMenu.module.css'

const Navbar=(props)=>{
    return(
        <div className={styles.nav}>
        <div className={styles.logo}>
            <img className={styles.logo} src={logo} alt="" />
        </div>
        <div className={styles.navigationItemsDesktop}>
                <p className={`${styles.navButton} ${styles.activeDesktop}`}>
                    Home
                </p>
                <p className={styles.navButton}>
                    About
                </p>
                <p className={styles.navButton}>
                    Projects
                </p>
                <p className={styles.navButton}>
                    Blogs
                </p>
                <p className={styles.navButton}>
                    Contact
                </p>
            </div>
            </div>
    )
}

export default Navbar