import React from 'react'
import {Root, Routes} from 'react-static'
import {ThemeProvider} from 'styled-components'
import {theme} from "./theme";
import {CloudinaryContext} from "cloudinary-react";
import NavBar from "./components/NavBar";

export default () =>
    <Root>
        <ThemeProvider theme={theme}>
            <CloudinaryContext cloudName="smddev" secure="true">
                <div className="content">
                    <NavBar/>
                    <Routes/>
                </div>
            </CloudinaryContext>
        </ThemeProvider>
    </Root>

