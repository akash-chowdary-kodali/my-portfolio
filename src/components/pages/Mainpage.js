import NavBar from "../navbar/nav";
import { AnimatedRoutes } from "./AnimatedRoutes";
import { Greeting} from "./greeting";
import {ScrollToTop} from "./scrolltoTop";

export const MainPage = () => {
    return (
        <div id="mainDivstyle">
            <section>
                <Greeting/>
            </section>
            <NavBar/>
            <section id = "afternav">
            <ScrollToTop/>
                <AnimatedRoutes/>
            </section>

        </div>
    );
}