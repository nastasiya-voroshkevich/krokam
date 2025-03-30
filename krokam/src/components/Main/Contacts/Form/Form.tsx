import styles from "./Form.module.scss"


export const Form = () => {
    return (
       <form action="">
        <div className={styles.form_wrapp}>
        <div className={styles.input_wrapp}>
        <label className={styles.label_text}>Name</label>
        <input type="text" className={styles.email} />
        </div>
        <div className={styles.input_wrapp}>
        <label className={styles.label_text}>Email</label>
        <input type="text" className={styles.email} />
        </div>
        </div>
        <label className={styles.label_text}>Message</label>
       <input type="text" className={styles.message}/>
       <div className={styles.checkbox_wrapp}> 
       <input type="checkbox" className={styles.checkbox} name="check" id="check" />
       <label htmlFor="check">I’m not a robot</label>
       </div>
       </form>
    );
};