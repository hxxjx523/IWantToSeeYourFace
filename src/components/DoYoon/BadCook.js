// import "../css/all.css";
import { useState } from "react";

import End from '../json/BadCook.json'
import EndingDialogue from '../EndingDialogue'

import Ending from '../Ending'


function BadCook(){

    const [showEnding, setShowEnding] = useState(false);

    const handleDialogueEnd = () => {
        setShowEnding(true);
    };

    const background = "BadCook"
    const endTitle = "END(5/9) - BAD COOK"
    const endContent = "이런.. 주방을 망치고 말았다"

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

export default BadCook