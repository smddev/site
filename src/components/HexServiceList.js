import React from 'react';
import {Hexagon, HexGrid, Link2} from '../atoms'
import {Image} from "cloudinary-react";
import styled, {withTheme} from "styled-components";
import background from "../services.png"

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

const HexServiceList = withTheme(({services, theme, className}) => {
    const pxSize = theme.icons[0];
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
        <HexGrid height={274} direction={'vertical'}>
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
                        fontSize={3}
                        lineHeight={'36px'}
                        href={`/portfolio?service=${service.data.slug}`}>
                        {service.data.title}
                    </Link>
                </Hexagon>

            )}
        </HexGrid>
    </div>
})

export default styled(HexServiceList)`
  background-image: url(${background});
  background-repeat: no-repeat;
  padding: 20px 60px 60px 60px;
  margin: 0 -60px;
`