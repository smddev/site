import {CloudinaryContext} from "cloudinary-react";
import React, {Component, Suspense} from 'react';
import {Root, Routes} from 'react-static';
import { FormattedMessage, IntlProvider } from 'react-intl'
import ru from './i18n/ru.json'
import en from './i18n/en.json'
import styled, {createGlobalStyle, css, ThemeProvider} from 'styled-components';
import {h2Style,  paragraph} from './atoms';
import listItem from './listItem.svg';
import {theme} from "./theme";
import {SizesProvider} from 'react-sizes';
import {LoadingHex} from "./atoms/Hexagon";

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
    width: 100%;
    box-sizing: border-box;
  }
  body {
    font-family: ${theme.fonts.ru};
    margin: 0; 
    padding: 0;
    background: ${theme.colors.black[0]};
    color: ${theme.colors.white[0]};
  }
  
  ul {
    margin: 0;
  }
  
  .ril__navButtons {
    outline: none;
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
        margin-top: 1em;
        list-style: none;
        padding: 0;
        li {
          vertical-align: top;
          color: ${theme.colors.gray[2]}
          font-weight: ${theme.fontWeights[1]};
          font-size:  ${theme.fontSizes[11]}px;
          line-height: ${theme.lineHeights[11]};
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
            line-height: ${theme.lineHeights[4]};
          }
          p {
            font-size: ${p => `${p.theme.fontSizes[3]}px`};
            line-height: ${theme.lineHeights[3]};
          }
      }
  }
`;

const config = {fallbackWidth: 1920};

const WrapperDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

const StyledEm = styled.em`
  position: absolute;
  z-index: 1;
`

const locales = {
  ['ru']: ru,
  ['en']: en
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lang = process.env.LANG

    return (
      <Root>
        <IntlProvider locale={ lang } messages={ locales[lang] }>
          <SizesProvider config={config}>
            <ThemeProvider theme={theme}>
              <CloudinaryContext cloudName="smddev" secure="true">
                <div className="content">
                  <GlobalStyle/>
                  <Suspense
                      fallback=
                          {<WrapperDiv>
                            <StyledEm>
                              <FormattedMessage id="message.loading" />
                            </StyledEm>
                            <LoadingHex color={theme.colors.gray[0]}/>
                          </WrapperDiv>}
                  >
                    <Routes/>
                  </Suspense>
                </div>
              </CloudinaryContext>
            </ThemeProvider>
          </SizesProvider>
        </IntlProvider>
      </Root>
    );
  }
}

export default App;
