import styles from "./Navbar.module.scss";

export const Navbar = () => (
  <nav className={styles.nav}>
    <ul className={styles.nav_list}>
      <li className={styles.nav_list__item}>
        <a className={styles.nav_list__link} href="#home">
          Home
        </a>
      </li>
      <li className={styles.nav_list__item}>
        <a className={styles.nav_list__link} href="#about">
          About project
        </a>
      </li>
      <li className={styles.nav_list__item}>
        <a className={styles.nav_list__link} href="#project">
          Projects
        </a>
      </li>
      <li className={styles.nav_list__item}>
        <a className={styles.nav_list__link} href="#contacts">
          Contacts
        </a>
      </li>
    </ul>
  </nav>
);
