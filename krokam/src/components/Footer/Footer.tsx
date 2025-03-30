import { ContentWrapper } from "../ContentWrapper/ContentWrapper.tsx";
import logo from "/public/logo.svg";
import styles from "./Footer.module.scss";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper.tsx";
import Frame from "./Frame.svg";
export const Footer = () => {
  return (
    <ContentWrapper id="footer" type="footer" className={styles.footer}>
      <SectionWrapper>
      <img className={styles.logo} src={logo} alt="logo" />
      <ul className={styles.footer_list}>
        <div>
        <li className={styles.list_item}>info@krokam.com</li>
        <li>
          <img src={Frame} alt="" />
        </li>

        </div>
        <div>
        <li className={styles.list_item}>
          <a className={styles.list_link} href="#home">
            Home
          </a>
        </li>
        <li>
          <a className={styles.list_link} href="#about">
            About project
          </a>
        </li>

        </div>
        <div>
        <li className={styles.list_item}>
          <a className={styles.list_link} href="#project">
            Projects
          </a>
        </li>
        <li>
          <a className={styles.list_link} href="#footer">
            Contacts
          </a>
        </li>

        </div>
      </ul>

      </SectionWrapper>
    </ContentWrapper>
  );
};
