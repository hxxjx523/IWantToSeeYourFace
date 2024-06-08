import { useState } from "react";
import End from '../json/WaitingPerson.json';
import Ending from '../Ending';
import EndingDialogue from '../EndingDialogue'

function WaitingPerson() {
    const [showEnding, setShowEnding] = useState(false);

    const handleDialogueEnd = () => {
        setShowEnding(true);
    };

    const background = "WaitingPerson";
    const endTitle = "END(1/9) - WAITING PERSON";
    const endContent = "인연은 만드는 것이다";

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

export default WaitingPerson;