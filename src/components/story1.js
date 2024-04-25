import styles from "./css/story1.module.css"
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
export default function Story(){
    return(
        <div className={styles.container}>
                <img src="./images/Kimyeoju_face1.png" className={styles.kimyeojuImg}/>
                <img src="./images/Kimyeoju_dialogueWindow1.png" className={styles.dialogueWindow1}/>
                <img src="./images/Baekleehyun_face1-1.png" className={styles.BaekleehyunImg}/>
                <img src="./images/Baekleehyun_dialogueWindow.png" className={styles.dialogueWindow1}/>
                <div className={styles.nameAndDialogue}>
                    <div className={styles.name}>김여주</div>
                    <div className={styles.dialogue}>텍스트텍스트텍스트</div>
                </div>
                
                {/* <img src="./images/선택지발생.png" className="ss"/>
                <button className="btn"><img src="./images/StartBtn.png"/></button>
                <button className="btn"><img src="./images/StartBtn.png"/></button> */}
        </div>
    )
}