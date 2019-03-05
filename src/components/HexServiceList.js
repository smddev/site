import React from 'react';
import {Hexagon, HexGrid, Link2, withBackground} from '../atoms'
import {Image} from "cloudinary-react";
import styled, {withTheme, css} from "styled-components";
import background from "../servicesHex.svg";
import withSizes from 'react-sizes';

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

const HexServiceList = withTheme(withSizes(({width}) => ({isMobile: width < 640}))(
    ({services, theme, className, isMobile}) => {
        const pxSize = isMobile ? 20 : theme.icons[0];
        const icons = [{
            pos: 'lt',
            color: 'orange.2'
        },{
            pos: 'rc',
            color: 'orange.0'
        },{
            pos: 'lb',
            color: 'orange.1'
        },
        ]
        return <div className={className}>
            <HexGrid height={isMobile ? 128 : 274}>
                {services.slice(0, 3).map((service, index) =>
                    <Hexagon key={index}
                             iconColor={icons[index].color}
                             iconPos={icons[index].pos}
                             icon={<Icon publicId={`site/icons/${service.data.icon}`}
                                         crop="scale"
                                         width={pxSize}
                                         height={pxSize} responsive/>}
                             bg={'gray.0'}>
                        <Link
                            fontSize={isMobile ? 3 : 4}
                            lineHeight={`${isMobile ? theme.lineHeight[3] : theme.lineHeight[4]}px`}
                            href={`/portfolio?service=${service.data.slug}`}>
                            {service.data.title}
                        </Link>
                    </Hexagon>
                )}
            </HexGrid>
        </div>
    }
));

export default withBackground(background, 703, 631)(styled(HexServiceList)`
  display: flex;
  justify-content: center;
  @media(min-width: ${p=>p.theme.breakpoints[2]}) {
    display: block;
  }
`)`
  display:none;
  @media(min-width: ${p=>p.theme.breakpoints[0]}) {
    display: block;
    left: 50%;
    margin-left: -370px;
    top: -20px;
  } 
`