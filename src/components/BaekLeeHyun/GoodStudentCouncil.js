// import "../css/all.css";
import { useState } from "react";

import End from '../json/GoodStudentCouncil.json'
import EndingDialogue from '../EndingDialogue'

import Ending from '../Ending'


function GoodStudentCouncil(){

    const [showEnding, setShowEnding] = useState(false);

    const handleDialogueEnd = () => {
        setShowEnding(true);
    };

    const background = "GoodStudentCouncil"
    const endTitle = " END(2/9) - GOOD STUDENT COUNCIL"
    const endContent = "모든 건 적당히 하는 것이 좋다"

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