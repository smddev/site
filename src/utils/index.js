import React, {Component} from "react";

export function scrollTo(element, to, duration) {
    const start = element.scrollLeft,
        change = to - start,
        increment = 20;
    let currentTime = 0;

    var animateScroll = function(){
        currentTime += increment;
        const val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollLeft = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}


function easeInOutQuad(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
}

export const withWindowLocation = (WrappedComponent) => {
    const location = typeof window !== 'undefined' ? window.location : {query: ""};
    return class PP extends React.Component {
        render() {
            return <WrappedComponent {...this.props} {...{location}}/>
        }
    }
}