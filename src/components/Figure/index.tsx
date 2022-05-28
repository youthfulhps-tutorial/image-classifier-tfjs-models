import React from "react";
import styled from "styled-components";
import { PredictResult } from "../../hooks/useNet";

const StyledFigure = styled.div`
  background-color: #f7f7fd;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 700;
  margin-top: 24px;
  padding: 16px;
  width: 800px;
`;

const Figure = ({ className, probability }: PredictResult) => {
  return (
    <StyledFigure>
      <div>{className}</div>
      <div>{probability.toFixed(2)}</div>
    </StyledFigure>
  );
};

export default Figure;
