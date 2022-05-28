import React from "react";
import styled from "styled-components";

const StyledDotLoader = styled.div`
  display: inline-block;
  position: relative;

  div {
    position: absolute;
    top: 19px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 11px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 11px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 19px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 27px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(8px, 0);
    }
  }
`;

const DotLoader = () => {
  return (
    <StyledDotLoader>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledDotLoader>
  );
};

export default DotLoader;
