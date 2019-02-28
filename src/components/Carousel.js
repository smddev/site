import React, {Component} from 'react';
import styled from 'styled-components';
import {space} from 'styled-system';
import {ArrowButton, ARROW_BUTTON_HEIGHT} from "../atoms";
import {scrollTo} from "../utils";


const Container = styled.div`
  padding-bottom: 20px;
  height:100%;
  overflow-x: scroll;
  overflow-y: hidden;
  box-sizing: content-box;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  
  >* {
    width: ${p=>p.width}px;
    flex-shrink: 0;
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
`
const Hover = styled.div`
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  z-index: ${p=> p.active ? 1 : -1};
  cursor: ${p => p.active ? 'grabbing' : 'inherited'};
`

const Toolbar = styled.div`
  height: ${ARROW_BUTTON_HEIGHT}px;
  display: flex;
  justify-content: center;
  ${space}
  
  >*{
    &:not(:first-child) {
      margin-left: 30px;
    }
  }
`

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {dragging: false};
        this.container = React.createRef();
    }

    handleDown = (e) => {
        const x = e.clientX;
        this.setState(s=>({...s,
            dragging: true,
            initialX: x,
            x
        }));
    }

    handleUp = (e) => {
        const self = this;
        setTimeout(()=> {
            self.setState(s=>({...s,
                dragging: false,
                x:s.initialX
            }))
        }, 0);

    }

    handleMove = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.state.dragging) {
            this.container.current.scrollLeft += this.state.x - e.clientX;
            const x = e.clientX;
            this.setState(s=>({
                x
            }))
        }
    }

    scroll = (dir) => {
        const cs = this.container.current.scrollLeft;
        const width = this.props.width + 24;
        const cur = Math.floor(cs / width);
        const next = cur + dir;

        scrollTo(this.container.current, next * width, 300);
    }

    render() {
        const {children, className, width, height} = this.props;
        const {x, initialX} = this.state;
        const activeDrag = !!Math.abs(x - initialX);
        return <div {...{className}} onMouseLeave={this.handleUp}
                    onMouseUp={this.handleUp}
                    onMouseDown={this.handleDown}
                    onMouseMove={this.handleMove}>
            <Hover active={activeDrag}/>
            <Container ref={this.container}
                        {...{width, height}}>
                {children}
            </Container>
        </div>
    }
}


const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: ${p=>p.height}px;
  overflow: hidden;
  position: relative;
  ${space}
`


class CarouselPanel extends Component {
    constructor(props) {
        super(props);
        this.carousel = React.createRef();
    }

    handleClick = (dir) => (e) => {
        this.carousel.current.scroll(dir);
    }

    render() {
        const {className, mt, ...props} = this.props;
        return <div {...{className, mt}}>
            <StyledCarousel ref={this.carousel} {...props}></StyledCarousel>
            <Toolbar mt={'40px'}>
                <ArrowButton onClick={this.handleClick(-1)} left='true'/>
                <ArrowButton onClick={this.handleClick(1)}/>
            </Toolbar>
        </div>
    }
}


export default styled(CarouselPanel)`
  ${space};
`