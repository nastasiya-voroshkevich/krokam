import { Form } from "./Form/Form";
import styles from "./Contacts.module.scss"

import { SectionWrapper } from "../../SectionWrapper/SectionWrapper";

export const Contacts = () => {
    return (
        <section id="contacts">
        <SectionWrapper>
            <div className={styles.contacts}>
            <h3 className={styles.contacts_title}>Contacts</h3>
            <p className={styles.contacts_text}>Whether you have a question about collaboration or usage, drop us a message via form below.</p>
            <Form></Form>
            </div>

        </SectionWrapper>

        </section>
    );
};