import "./css/story2.css"
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Story2(){
    const [showImage, setShowImage] = useState(true);
    const [showButtons, setShowButtons] = useState(false); 

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowImage(false);
            setShowButtons(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    const handleButtonClick = () => {
    };

    return (
        <div className="container2">
            <img src="./images/Baekleehyun_silhouette.png" className="silhouette" alt="실루엣" />

            <div className="selectImgDiv">
                {showImage && <img src="./images/선택지발생.png" className={`selectImg ${showImage ? "show" : ""}`} alt="선택지 발생" />}  
            </div>

            {showButtons && (
                <>
                    <button className="selectButton" onClick={handleButtonClick}>
                        <img src="./images/StartBtn.png" alt="시작 버튼" />
                    </button>
                    <button className="selectButton" onClick={handleButtonClick}>
                        <img src="./images/StartBtn.png" alt="시작 버튼" />
                    </button>
                </>
            )}
        </div>
    );

}