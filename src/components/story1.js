import "./css/story1.css"
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
export default function Story(){
    return(
        <div className="container">
            <div className="kimyeoju">
                <img src="./images/Kimyeoju_face1.png" className="kimyeojuImg"/>
                <img src="./images/Kimyeoju_dialogueWindow1.png" className="dialogueWindow1"/>
                <div className="nameAndDialogue">
                    <div className="name">김여주</div>
                    <div className="dialogue">방구를 뀐 적있나요?</div>
                </div>
            </div>
        </div>
    )
}