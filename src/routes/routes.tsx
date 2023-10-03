import { AccordionOne } from "../components/AccordionOne/AccordionOne";
import { Parallax } from "../components/Parallax/Parallax";

export const routeUrls = { accordions: "/accordions", home: "/", parallax: "/paralax"}

export const routes = [
    {path: routeUrls.accordions, element: <AccordionOne/>, name: "Accordion One"},
    {path: routeUrls.home, element: <></>, name: "Home"},
    {path: routeUrls.parallax, element: <Parallax/>, name: "Paralax"}


]