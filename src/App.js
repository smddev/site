import { CloudinaryContext } from "cloudinary-react";
import React, { Component, Suspense } from 'react';
import { Root, Routes } from 'react-static';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { h2Style, paragraph } from './atoms';
import listItem from './listItem.svg';
import { theme } from "./theme";
import { EmailContext } from "./utils";
import { SizesProvider } from 'react-sizes';

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
  
  .aboutPage {
    h2 {
      ${h2Style};
      width: 80%;
      @media (max-width: ${p => p.theme.breakpoints[2]}) {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 0px;
      }
    }

    p {
      ${paragraph};
      @media (max-width: ${p => p.theme.breakpoints[2]}) {
        font-size: 18px;
        line-height: 26px;
      }
    }
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
      @media(max-width: ${p => p.theme.breakpoints[0]}) {
          h2 {
            font-size: ${p => `${p.theme.fontSizes[4]}px`};
            line-height: ${theme.lineHeight[4]}px;
          }
          p {
            font-size: ${p => `${p.theme.fontSizes[3]}px`};
            line-height: ${theme.lineHeight[3]}px;
          }
      }
  }
`;

const config = { fallbackWidth: 1920 };

class App extends Component {
  constructor(props) {
    super(props);

    this.changeEmail = value => {
      this.setState(state => ({
        ...state,
        email: value
      }));
    };

    this.state = {
      email: "",
      changeEmail: this.changeEmail
    };
  }

  render() {
    return (
      <Root>
        <SizesProvider config={config}>
          <EmailContext.Provider value={this.state}>
            <ThemeProvider theme={theme}>
              <CloudinaryContext cloudName="smddev" secure="true">
                <div className="content">
                  <GlobalStyle />
                  <Suspense fallback={<em>Loading...</em>}>
                    <Routes />
                  </Suspense>
                </div>
              </CloudinaryContext>
            </ThemeProvider>
          </EmailContext.Provider>
        </SizesProvider>
      </Root>
    );
  }
}

export default App;
