import "./css/all.css";
import styles from "./css/story1.module.css"
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useEffect } from "react";
// import openingTxt from './txt/openingTxt'
export default function Opening(){

    // useEffect(() => {
    //     // Opening 텍스트 파일을 가져오기
    //     fetch(openingTxt)
    //       .then(response => response.text())
    //       .then(text => {
    //         setOpeningText(text);
    //         parseOpeningText(text); // 텍스트를 파싱하여 변수에 할당
    //       })
    //   }, []);

    //   console.log(openingTxt)

    return(
        <div className={styles.container}>
                <img src="./images/Kimyeoju_face1.png" className={styles.kimyeojuImg}/>
                <img src="./images/Kimyeoju_dialogueWindow1.png" className={styles.dialogueWindow1}/>
                {/* <img src="./images/Baekleehyun_face1-1.png" className={styles.BaekleehyunImg}/>
                <img src="./images/Baekleehyun_dialogueWindow.png" className={styles.dialogueWindow1}/> */}
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