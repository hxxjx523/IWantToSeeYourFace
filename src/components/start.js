import "./start.css"
import { useNavigate } from "react-router-dom";

export default function Start() {
    const movePage = useNavigate();
  
    function goHome() {
      movePage('/question');
    }
  
    return (
      <div className="background">
        <div className="btn">
          <button className="StartBtn" onClick={goHome}></button>
          <button className="EndingCntBtn"></button>
        </div>
      </div>
    );
  
}