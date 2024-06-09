// import "../css/all.css";
import { useState } from "react";

import End from '../json/WorstGuest.json'
import EndingDialogue from '../EndingDialogue'

import Ending from '../Ending'

function WorstGuest(){

    const [showEnding, setShowEnding] = useState(false);

    const handleDialogueEnd = () => {
        setShowEnding(true);
    };

    const background = "WorstGuest"
    const endTitle = "END(8/9) - WORST GUEST"
    const endContent = "가만히 좀 있어!"

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

export default WorstGuest