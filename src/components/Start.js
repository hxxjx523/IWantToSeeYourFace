import "./css/all.css";
import styles from  "./css/start.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Start() {
    const movePage = useNavigate();
  
    // const Loading = () => {
    //   setTimeout(()=>{
    //     movePage('/question');
    //   },2000);
    //   return <div className="loading"></div>
      
    // }
    
    // return (
    //   <div id="background">
    //     <div className="btn">
    //       <button className="StartBtn" onClick={Loading}></button>
    //       <button className="EndingCntBtn"></button>
    //     </div>
    //   </div>
    // );

    const [isLoading, setIsLoading] = useState(false);

    const handleStartClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            movePage('/question');
        }, 1000);
    };

    return (
        <div id={styles.background}>
            <div className={styles.btn}>
                <button className={styles.StartBtn} onClick={handleStartClick}></button>
                <button className={styles.EndingCntBtn}></button>
            </div>
            {
              isLoading && 
              <div className="loading">
                <img src="./images/김여주.gif"/>
                <p className="loadingText">로딩중...</p>
              </div>
            }
        </div>
    );
  
} 