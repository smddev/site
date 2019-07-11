import {Flex} from "@rebass/grid";
import React, {Component} from "react";
import styled, {css} from "styled-components";
import {space} from "styled-system";
import {ArrowButton} from "../atoms";
import {scrollTo} from "../utils";

const carouselElement = css`
  width: ${p => p.width}px;
  flex-shrink: 0;
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

const Container = styled.div`
  padding-bottom: 20px;
  height: 100%;
  ${p => p.carousel && {"overflow-x": "scroll"}};
  overflow-y: hidden;
  box-sizing: content-box;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: ${p => (p.carousel ? "nowrap" : "wrap")};
  ${p => !p.carousel && p.pStyles};

  > * {
    ${p => p.carousel && carouselElement};
  }
  
`;
const Hover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${p => (p.active ? 1 : -1)};
  cursor: ${p => (p.active ? "grabbing" : "inherited")};
`;

const Toolbar = styled.div`
  ${space}

  >* {
    &:not(:first-child) {
      margin-top: 60px;
    }
  }
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {dragging: false};
    this.container = React.createRef();
  }

  handleDown = e => {
    const x = e.clientX;
    this.setState(s => ({
      ...s,
      dragging: true,
      initialX: x,
      x
    }));
  };

  handleUp = e => {
    const self = this;
    setTimeout(() => {
      self.setState(s => ({
        ...s,
        dragging: false,
        x: s.initialX
      }));
    }, 0);
  };

  handleMove = e => {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.dragging) {
      this.container.current.scrollLeft += this.state.x - e.clientX;
      const x = e.clientX;
      this.setState(s => ({
        x
      }));
    }
  };

  scroll = dir => {
    if (!this.state.dragging) {
      this.state.dragging = true;
      const cs = this.container.current.scrollLeft;
      const width = this.props.width + 24;
      const cur = Math.floor(cs / width);
      const next = cur + dir;

      scrollTo(this.container.current, next * width, 300);

      let durationFunc = function (state) {
        setTimeout(function () {
          state.dragging = false;
        }, 200);
      };
      durationFunc(this.state);
    }
  };

  render() {
    const {
      children,
      className,
      width,
      height,
      pStyles,
      carousel
    } = this.props;
    const {x, initialX} = this.state;
    const activeDrag = !!Math.abs(x - initialX);
    return (
      <div
        {...{className}}
        onMouseLeave={this.handleUp}
        onMouseUp={this.handleUp}
        onMouseDown={this.handleDown}
        onMouseMove={this.handleMove}
      >
        <Hover active={activeDrag}/>
        <Container
          ref={this.container}
          {...{width, height, pStyles, carousel}}
        >
          {children}
        </Container>
      </div>
    );
  }
}

const StyledCarousel = styled(Carousel)`
  width: 100%;
  ${p => p.carousel && {height: `${p.height}px`}};
  overflow: hidden;
  position: relative;
  ${space}
`;

class CarouselPanel extends Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }

  handleClick = dir => e => {
    this.carousel.current.scroll(dir);
  };

  render() {
    const {className, mt, carousel, ...props} = this.props;
    return (
      <Flex {...{className, mt}}>
        {carousel && (
          <Toolbar mt={"95px"}>
            <ArrowButton onClick={this.handleClick(-1)} up="true"/>
            <ArrowButton onClick={this.handleClick(1)} down="true"/>
          </Toolbar>
        )}
        <StyledCarousel ref={this.carousel} {...{...props, carousel}} />
      </Flex>
    );
  }
}

export default styled(CarouselPanel)`
  ${space};
`;
