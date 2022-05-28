import { useRef, useState } from "react";

const useWebcam = () => {
  const cameraRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const runWebcam = async () => {
    setIsLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (!cameraRef.current) return;
      cameraRef.current.srcObject = stream;
    } catch (error) {
      console.log(error);
      alert("error occurred!");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    cameraRef,
    runWebcam,
    isLoading,
  };
};

export default useWebcam;
