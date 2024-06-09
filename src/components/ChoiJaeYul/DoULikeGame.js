import { useState } from "react";
import End from '../json/DoULikeGame.json';
import Ending from '../Ending';
import EndingDialogue from '../EndingDialogue'

function DoULikeGame(){

    const [showEnding, setShowEnding] = useState(false);

    const handleDialogueEnd = () => {
        setShowEnding(true);
    };

    const background = "DoULikeGame";
    const endTitle = "END(7/9) - DO U LIKE GAME?";
    const endContent = "오타쿠라...";

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

export default DoULikeGame