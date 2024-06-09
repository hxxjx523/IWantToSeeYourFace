import { useState } from "react";
import End from '../json/DoYoonGoodEnding.json';
import Ending from '../Ending';
import EndingDialogue from '../EndingDialogue'

function DoYoonGoodEnding() {
    const [showEnding, setShowEnding] = useState(false);

    const handleDialogueEnd = () => {
        setShowEnding(true);
    };

    const background = "DoYoonGoodEnding";
    const endTitle = "END(6/9) - DO YOON GOOD ENDING";
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

export default DoYoonGoodEnding;