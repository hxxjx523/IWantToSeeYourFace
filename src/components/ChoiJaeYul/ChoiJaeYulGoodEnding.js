import { useState } from "react";
import End from '../json/ChoiJaeYulGoodEnding.json';
import Ending from '../Ending';
import EndingDialogue from '../EndingDialogue'

function ChoiJaeYulGoodEnding() {
    const [showEnding, setShowEnding] = useState(false);

    const handleDialogueEnd = () => {
        setShowEnding(true);
    };

    const background = "ChoiJaeYulGoodEnding";
    const endTitle = "END(9/9) - CHOI JAE YUL GOOD ENDING";
    const endContent = "그렇게 인연이 되었다는 것";

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

export default ChoiJaeYulGoodEnding;