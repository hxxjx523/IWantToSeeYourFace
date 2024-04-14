import "./css/all.css";
import "./css/start.css";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

export default function Start() {
    const movePage = useNavigate();
  
    

    const Loading = () => {
      setTimeout(()=>{
          movePage('/question');
      },2000);

      return <div className="loading"></div>
    }
  
    return (
      <div id="background">
        <div className="btn">
          <button className="StartBtn" onClick={Loading}></button>
          <button className="EndingCntBtn"></button>
        </div>
      </div>
    );
  
}