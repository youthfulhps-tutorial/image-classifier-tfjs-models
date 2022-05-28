import React, { RefObject } from "react";
import styled from "styled-components";

interface WebcamProps {
  cameraRef: RefObject<HTMLVideoElement>;
}

const StyledWebcam = styled.video`
  width: 800px;
  height: 600px;
`;

const Webcam = ({ cameraRef }: WebcamProps) => {
  return <StyledWebcam autoPlay playsInline muted={true} ref={cameraRef} />;
};

export default Webcam;
