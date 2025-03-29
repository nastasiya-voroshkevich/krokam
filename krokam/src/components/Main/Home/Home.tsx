import styles from "./Home.module.scss"
export const Home = () => {
    return (
        <section id="home" className={styles.home}>
            <div className={styles.home_wrapp}>
         <h1 className={styles.home_title}>Personal audio guides and navigators 
         for localities and surroundings</h1>
                
            </div>
        </section>
    );
};