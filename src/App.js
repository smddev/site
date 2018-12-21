import React, {Fragment} from 'react'
import {Router} from 'react-static'
import {hot} from 'react-hot-loader'
import {ThemeProvider} from 'styled-components'
import Routes from 'react-static-routes'
import {theme} from "./theme";
import NavBar from "./components/NavBar";

const App = () => (
    <Router>
        <ThemeProvider theme={theme}>
            <Fragment>
                <NavBar/>
                <div className="content">
                    <Routes/>
                </div>
            </Fragment>
        </ThemeProvider>
    </Router>
)

export default hot(module)(App)
