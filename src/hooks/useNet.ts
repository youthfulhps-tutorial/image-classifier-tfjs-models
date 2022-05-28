import { RefObject, useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from "@tensorflow/tfjs";

export interface PredictResult {
  className: string;
  probability: number;
}

const useNet = (cameraRef: RefObject<HTMLVideoElement>) => {
  const [result, setResult] = useState<PredictResult>({
    className: "",
    probability: 0,
  });

  const classifyTarget = async () => {
    const mobileNet = await mobilenet.load();

    if (!cameraRef.current) return;
    const inputVideo = await tf.data.webcam(cameraRef.current, {
      resizeWidth: 220,
      resizeHeight: 227,
    });

    while (true) {
      const capturedImage = await inputVideo.capture();
      const result = await mobileNet.classify(capturedImage);
      const { className, probability } = result[0];
      setResult({ className, probability });

      capturedImage.dispose();
      await tf.nextFrame();

      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    }
  };

  return {
    cameraRef,
    classifyTarget,
    result,
  };
};

export default useNet;
