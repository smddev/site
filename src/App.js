import React from 'react'
import {Root, Routes} from 'react-static'
import {ThemeProvider} from 'styled-components'
import {theme} from "./theme";

export default () =>
    <Root>
        <ThemeProvider theme={theme}>
            <div className="content">
                <Routes/>
            </div>
        </ThemeProvider>
    </Root>

