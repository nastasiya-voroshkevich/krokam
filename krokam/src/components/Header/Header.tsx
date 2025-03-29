import {ContentWrapper} from "../ContentWrapper/ContentWrapper.tsx";
import { Navbar } from "../Navbar/Navbar.tsx";
import styles from "./Header.module.scss"
import logo from "./assets/logo.svg"
import lang from "./assets/lang.svg"

export const Header = () => {
    return (
        <ContentWrapper type="header" className={styles.header}>
             <div className={styles.logo}>
                <img src={logo} alt="logo" />
             </div>
             <Navbar></Navbar>
             <button className={styles.lang}>
                <img src={lang} alt="lang" />
             </button>
            </ContentWrapper>
    );
};