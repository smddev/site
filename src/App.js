import React from 'react'
import {Root, Routes} from 'react-static'
import {createGlobalStyle, ThemeProvider, css} from 'styled-components'
import {theme} from "./theme";
import {CloudinaryContext} from "cloudinary-react";
import NavBar from "./organisms/NavBar";
import {description} from './atoms'
import listItem from './listItem.svg'

const paragraph = css`
  font-weight: ${theme.fontWeights[0]};
  font-size:  ${theme.fontSizes[10]}px;
  line-height: ${theme.lineHeight[10]}px;
`

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fonts.base};
    margin: 0; 
    padding: 0;
    background: ${theme.colors.black[0]}
    color: ${theme.colors.white[0]}
    overflow-x: hidden;
  }
  
  h2 {
    ${description};
    font-weight: ${theme.fontWeights[1]};
    font-size:  ${theme.fontSizes[5]}px;
    line-height: ${theme.lineHeight[5]}px;
    margin: 60px 0 0 0;
  }
  
  p {
    font-weight: ${theme.fontWeights[0]};
    font-size:  ${theme.fontSizes[10]}px;
    line-height: ${theme.lineHeight[10]}px;
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
      width: 50%;
    }
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

