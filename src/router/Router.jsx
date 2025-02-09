import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Intro from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Portfolio from "../Pages/Portfolio";
import Services from "../Pages/Services";

const router = createBrowserRouter
([
    {
        path: "/",
       element:<App/>,
        children: [
            {
                path: "/",
                element:<Intro/>,
            },
            {
                path: "/about",
                element:<About/>,
            }, {
                path: "/services",
                element:<Services/>,
            },
            {
                path: "/contact",
                element:<Contact/>,
            },
            {
                path: "/portfolio",
                element:<Portfolio/>,
            },
            
        ]
    }
])

export default router;