import { AccordionOne } from "../components/AccordionOne/AccordionOne";

export const routeUrls = { accordions: "/accordions", home: "/", parallax: "/paralax"}

export const routes = [
    {path: routeUrls.accordions, element: <AccordionOne/>, name: "Accordion One"},
    {path: routeUrls.home, element: <></>, name: "Home"},
    {path: routeUrls.parallax, element: <></>, name: "Paralax"}


]