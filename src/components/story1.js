import "./css/story1.css"
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
export default function Story(){
    return(
        <div className="container">
            <div className="kimyeoju">
                <img src="./images/Kimyeoju_face1.png" className="kimyeojuImg"/>
                <img src="./images/Kimyeoju_dialogueWindow1.png" className="dialogueWindow1"/>
                <div className="name">김여주</div>
                <div className="dialogue">안녕하세요?</div>
            </div>
        </div>
    )
}