import React from 'react'
import {Root, Routes} from 'react-static'
import {ThemeProvider} from 'styled-components'
import {theme} from "./theme";
import {CloudinaryContext} from "cloudinary-react";

export default () =>
    <Root>
        <ThemeProvider theme={theme}>
            <CloudinaryContext cloudName="smddev">
                <div className="content">
                    <Routes/>
                </div>
            </CloudinaryContext>
        </ThemeProvider>
    </Root>

