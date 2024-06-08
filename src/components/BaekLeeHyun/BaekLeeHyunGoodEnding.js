import { useState } from "react";
import End from '../json/BaekLeeHyunGoodEnding.json';
import Ending from '../Ending';
import EndingDialogue from '../EndingDialogue'

function BaekLeeHyunGoodEnding() {
    const [showEnding, setShowEnding] = useState(false);

    const handleDialogueEnd = () => {
        setShowEnding(true);
    };

    const background = "BaekLeeHyunGoodEnding";
    const endTitle = "END(3/9) - BAEK LEE HYUN GOOD ENDING";
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

export default BaekLeeHyunGoodEnding;