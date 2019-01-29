import React from 'react'
import {Root, Routes} from 'react-static'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {theme} from "./theme";
import {CloudinaryContext} from "cloudinary-react";
import NavBar from "./components/NavBar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Archivo';
    margin: 0;
    padding: 0;
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

