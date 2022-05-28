import React, { useEffect } from "react";
import Webcam from "./components/Webcam";
import Figure from "./components/Figure";
import useNet from "./hooks/useNet";
import useWebcam from "./hooks/useWebcam";
import styled from "styled-components";
import DotLoader from "./components/Common/DotLoader";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background: #3d403f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    border-radius: 8px;
    -webkit-box-shadow: 1px 5px 20px 0px #000000;
    box-shadow: 1px 5px 20px 0px #000000;
  }
`;

const App = () => {
  const { cameraRef, runWebcam, isLoading } = useWebcam();
  const { classifyTarget, result } = useNet(cameraRef);

  useEffect(() => {
    runWebcam();
    classifyTarget();
  }, []);

  return (
    <StyledApp>
      {isLoading ? (
        <DotLoader />
      ) : (
        <>
          <Webcam cameraRef={cameraRef} />
          <Figure {...result} />
        </>
      )}
    </StyledApp>
  );
};

export default App;
