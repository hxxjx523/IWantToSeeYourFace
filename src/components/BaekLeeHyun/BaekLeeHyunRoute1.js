import "../css/all.css";
import baekLeeHyunRoute from '../json/baekLeeHyunRoute1.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";
import { useEffect, useRef } from "react";

function BaekLeeHyunRoute1() {

    const audioRef = useRef()

    useEffect(() => {
        if (audioRef.current) {
        const playAudio = async () => {
            try {
            await audioRef.current.play();
            } catch (error) {
            console.error('자동 재생 실패:', error);
            }
        };
        playAudio();
        }
    }, []);

  return (
    <>
    
      <audio ref={audioRef} src="./music/story_music.mp3" />
      <Dialogue routeData={baekLeeHyunRoute} chapter={"chapter2"} />
    </>
  );
}

export default BaekLeeHyunRoute1;
