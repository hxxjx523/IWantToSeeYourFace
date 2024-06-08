// import "../css/all.css";
import { useState } from "react";

import End from '../json/NotMe.json'
import EndingDialogue from '../EndingDialogue'

import Ending from '../Ending'


function GoodStudentCouncil(){

    const [showEnding, setShowEnding] = useState(false);

    const handleDialogueEnd = () => {
        setShowEnding(true);
    };

    const background = "NotMe"
    const endTitle = " END(4/9) - NOT ME "
    const endContent = "굳이 거짓말할 필요가 있을까?"

    return (
        <div>
            {!showEnding ? (
                <EndingDialogue routeData={End} onDialogueEnd={handleDialogueEnd} />
            ) : (
                <Ending endTitle={endTitle} endContent={endContent} background={background}/>
            )}
        </div>
    );
} 

export default GoodStudentCouncil