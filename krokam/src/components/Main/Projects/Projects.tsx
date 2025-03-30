// import { ProjectCard } from "./ProjectCard/ProjectCard";
// import {data} from "./ProjectCard/data"
import { SectionWrapper } from "../../SectionWrapper/SectionWrapper";
import styles from "./Project.module.scss";
import { Grid } from "./ProjectCard/Grid";

export const Projects = () => {
  return (
    <section id="project" className={styles.project}>
      <div className={styles.bg}>
        <div className={styles.bg_img}> </div>
      </div>
      <SectionWrapper>
        <h3 className={styles.project_title}>Our projects</h3>
        <Grid></Grid>
      </SectionWrapper>
    </section>
  );
};
