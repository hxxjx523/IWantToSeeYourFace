// import "../css/all.css";
import { useEffect, useRef, useState } from "react";

import End from '../json/BadCook.json'
import EndingDialogue from '../EndingDialogue'

import Ending from '../Ending'


function BadCook(){

    const [showEnding, setShowEnding] = useState(false);
    const audioRef = useRef()

    const handleDialogueEnd = () => {
        setShowEnding(true);
    };

    const background = "BadCook"
    const endTitle = "END(5/9) - BAD COOK"
    const endContent = "이런.. 주방을 망치고 말았다"

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
        <div>
            <audio ref={audioRef} src="./music/END-BadCook_music.mp3" />
            {!showEnding ? (
                <EndingDialogue routeData={End} onDialogueEnd={handleDialogueEnd} />
            ) : (
                <Ending endTitle={endTitle} endContent={endContent} background={background}/>
            )}
        </div>
    );
} 

export default BadCook