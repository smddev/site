import React from 'react'
import {Root, Routes} from 'react-static'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {theme} from "./theme";
import {CloudinaryContext} from "cloudinary-react";
import NavBar from "./organisms/NavBar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fonts.base};
    margin: 0;
    padding: 0;
    background: ${theme.colors.black[0]}
    color: ${theme.colors.white[0]}
  }
`

export default () =>
    <Root>
        <ThemeProvider theme={theme}>
            <CloudinaryContext cloudName="smddev" secure="true">
                <div className="content">
                    <GlobalStyle/>
                    <NavBar/>
                    <Routes/>
                </div>
            </CloudinaryContext>
        </ThemeProvider>
    </Root>

