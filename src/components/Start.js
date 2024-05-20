import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/all.css";
import styles from "./css/start.module.css";

export default function Start() {
    const movePage = useNavigate();
    const [audioPlayed, setAudioPlayed] = useState(false);
    const audioRef = useRef(null);

    const handleMusicClick = () => {
        if (!audioPlayed) {
            const audio = new Audio('./music/title_music.mp3'); 
            audio.loop = true; 
            audio.play(); 
            audioRef.current = audio; 
            setAudioPlayed(true); 
        }else{
            audioRef.current.pause();
            audioRef.current.currentTime = 0; 
            setAudioPlayed(false); 
        }
    };

    const handleStartClick = () => {
        if(audioPlayed){
            audioRef.current.pause();
            audioRef.current.currentTime = 0; 
            setAudioPlayed(false); 
        }
        movePage('/question');
    }

    return (
        <div id={styles.background}>
                <button className={styles.MusicBtn} onClick={handleMusicClick}><img src="./images/music-note-beamed.svg" alt="" width="30px"/></button>
            <div className={styles.btn}>
                <button className={styles.StartBtn} onClick={handleStartClick}></button>
                <button className={styles.EndingCntBtn}></button>
            </div>
        </div>
    );
}