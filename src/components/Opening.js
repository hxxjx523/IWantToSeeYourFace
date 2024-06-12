import React, { useEffect, useRef } from 'react';
import "./css/all.css";
import opening from './json/opening.json'; 
import Dialogue from "./Dialogue";
function Opening() {
    const audioRef = useRef(null);

    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error('자동 재생 실패:', error);
        });
      }
    }, []);

    return (
        <>
        <Dialogue routeData={opening} chapter={"firstStory"}/>
        <audio ref={audioRef} src="./music/story_music1.mp3" />
        </>
    );
}

export default Opening