import React from "react";

export EmailContext from "./EmailContext";

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

const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const validateEmail = email =>
  email && email.trim() && EMAIL_REGEX.test(email.trim());

export const getField = (source, field) => {
  return field.split('.').filter(f => !!f).reduce(function(obj, i) {
    return obj ? obj[i] : null;
  }, source);
}

export const DEFAULT_PROJECT_COVER = 'close-up-code-codes-239898';