import React, {Component, Suspense} from 'react'
import {Root, Routes} from 'react-static'
import {createGlobalStyle, ThemeProvider, css} from 'styled-components'
import {theme} from "./theme";
import {CloudinaryContext} from "cloudinary-react";
import NavBar from "./organisms/NavBar";
import {description, h2Style, paragraph} from './atoms'
import listItem from './listItem.svg'
import {EmailContext} from "./utils";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fonts.base};
    margin: 0; 
    padding: 0;
    background: ${theme.colors.black[0]}
    color: ${theme.colors.white[0]}
    overflow-x: hidden;
  }
  
  ul {
    margin: 0;
  }
  
  .markdown {
      h2 {
        ${h2Style};
        margin: 60px 0 0 0;
      }
      
      p {
        ${paragraph};
      }
      
      ul {
        list-style: none;
        padding: 0;
        li {
          vertical-align: top;
          color: ${theme.colors.gray[2]}
          font-weight: ${theme.fontWeights[1]};
          font-size:  ${theme.fontSizes[11]}px;
          line-height: ${theme.lineHeight[11]}px;
          background: url(${listItem}) no-repeat left top;
          padding: 0 35px;
          margin-bottom: 20px;
          display: inline-block;
          box-sizing: border-box;
          width: 100%;
          
          
          @media(min-width: ${theme.breakpoints[3]}) {
            width: 50%;
          }
        }
      }
  }
`

class App extends Component {
    constructor(props) {
        super(props);

        this.changeEmail = (value) => {
            this.setState(state => ({
                ...state,
                email: value
            }));
        };

        this.state = {
            email: "",
            changeEmail: this.changeEmail,
        };
    }

    render() {
        return <Root>
            <EmailContext.Provider value={this.state}>
                <ThemeProvider theme={theme}>
                    <CloudinaryContext cloudName="smddev" secure="true">
                        <div className="content">
                            <GlobalStyle/>
                            <Suspense fallback={<em>Loading...</em>}>
                                <Routes/>
                            </Suspense>
                        </div>
                    </CloudinaryContext>
                </ThemeProvider>
            </EmailContext.Provider>
        </Root>
    }
}

export default App;