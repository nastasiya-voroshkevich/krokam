import {ContentWrapper} from "../ContentWrapper/ContentWrapper.tsx";
import {Home} from "./Home/Home.tsx";
import {AboutProjects} from "./AboutProject/AboutProjects.tsx";
import {Projects} from "./Projects/Projects.tsx";
import {Contacts} from "./Contacts/Contacts.tsx";

export const Main = () => {
    return (
        <ContentWrapper type="main">
            <Home/>
            <AboutProjects/>
            <Projects/>
            <Contacts/>
        </ContentWrapper>
    );
};