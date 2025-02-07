import React from "react";

export function scrollTo(element, to, duration) {
  const start = element.scrollLeft,
    change = to - start,
    increment = 20;
  let currentTime = 0;

  var animateScroll = function() {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollLeft = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

export const withWindowLocation = WrappedComponent => {
  const location =
    typeof window !== "undefined" ? window.location : { query: "" };
  return class PP extends React.Component {
    render() {
      return <WrappedComponent {...this.props} {...{ location }} />;
    }
  };
};

const sizeToProps = ({ breakPoints }) => ({ width }) => {
  return {
    isXMobile: width <= breakPoints[0],
    isMobile: width <= breakPoints[1],
    isTablet: width <= breakPoints[2]
  }
};

export const getField = (source, field) => {
  return field.split('.').filter(f => !!f).reduce(function(obj, i) {
    return obj ? obj[i] : null;
  }, source);
}

export const normalizeName = (name) => {
  if (name?.startsWith('http')) {
    const segments = name.split('/');
    return segments[segments.length - 1] || name;
  }
  return name;
}

export const DEFAULT_PROJECT_COVER = 'coding-screen';

export const GOOGLE_ANALYTICS_KEY = 'UA-111454437-1'

export const YEAR = new Date().getFullYear();