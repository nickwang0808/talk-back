import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { play, stop } from "ionicons/icons";
import { useRef } from "react";
import useRecorder from "../hooks/useRecorder";

const Home: React.FC = () => {
  let { audioURL, isRecording, startRecording, stopRecording } = useRecorder();
  const audio = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    stopRecording();
    setTimeout(() => {
      if (audio.current) {
        audio.current.play();
      }
    }, 500);
  };

  const handleRecord = (e: any) => {
    if (e.target === e.currentTarget) {
      startRecording();
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          className={`container ${isRecording ? "red" : "green"}`}
          onTouchStart={(e) => handleRecord(e)}
          onTouchEnd={handlePlay}
        >
          <audio src={audioURL} controls ref={audio} />
          <IonIcon icon={isRecording ? stop : play} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
