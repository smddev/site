import React from 'react';
import {Hexagon, ServicesGrid, Link2, withBackground} from '../atoms'
import {Image} from "cloudinary-react";
import styled, {withTheme, css} from "styled-components";
import background from "../servicesHex.svg";
import {responsive} from "../utils"
import {ServicesHex, ServicesHexIcon} from "../atoms";

const Icon = styled((props) => <div className={props.className}><Image {...props}/></div>)`
  width: ${p => `${p.width}px`};
  height: ${p => `${p.width}px`};
  
  img {
    width: 100%;
    height: 100%;
  }
`

const Link = styled(({className, ...props}) => <div className={className}><Link2 {...props}>{props.children}</Link2></div>)`
  margin: 0 40px;
  text-align: center;
`

const ICN = ({color, url, pxSize}) => ({}) =><ServicesHexIcon color={color}>
  <Icon publicId={url}
        crop="scale"
        width={pxSize}
        height={pxSize} responsive/>
</ServicesHexIcon>

const HexServiceList = ({services, theme, className}) => {
        const pxSize = theme.icons[0];
        const icons = [{
            pos: 'lt',
            color: '2'
        },{
            pos: 'rc',
            color: '0'
        },{
            pos: 'lb',
            color: '1'
        },
        ]

        return <div className={className}>
            <ServicesGrid>
                {services.slice(0, 3).map((service, index) =>
                    <ServicesHex key={index}
                             iconPos={icons[index].pos}
                             icon={ICN({color:theme.colors.orange[icons[index].color], url:`site/icons/${service.data.icon}`, pxSize})}
                             color={theme.colors.gray[0]}>
                        <Link
                            fontSize={[3,4]}
                            lineHeight={[3,4]}
                            href={`/portfolio?service=${service.data.slug}`}>
                            {service.data.title}
                        </Link>
                    </ServicesHex>
                )}
            </ServicesGrid>
        </div>
    }


export default withBackground(background, 703, 631)(styled(withTheme(HexServiceList))`
  display: flex;
  justify-content: center;
  max-width: 100%;
  @media(min-width: ${p=>p.theme.breakpoints[3]}) {
    display: block;
  }
`)`
  display:none;
  @media(min-width: ${p=>p.theme.breakpoints[1]}) {
    display: block;
    left: 50%;
    margin-left: -370px;
    top: -20px;
  } 
`
