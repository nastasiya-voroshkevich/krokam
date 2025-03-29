import styles from "./Navbar.module.scss";

export const Navbar = () => (
    <nav className={styles.nav}>
        <ul className={styles.nav_list}>
        <li  >
        <a className={styles.nav_list__link} href="/">Home</a>
            </li>
        <li  >
        <a className={styles.nav_list__link} href='/'>About project</a>
            </li>
        <li  >
        <a className={styles.nav_list__link} href='/'>Projects</a>
            </li>
        <li  >
        <a className={styles.nav_list__link} href="#footer">Contacts</a>
            </li>
   
      
    </ul>
   
</nav>

)

