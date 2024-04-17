import "./css/story2.css"
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Story2(){
    const [showImage, setShowImage] = useState(true); // 선택지 발생 이미지 보여주는 상태
    const [showButtons, setShowButtons] = useState(false); // 버튼 보여주는 상태

    useEffect(() => {
        // 선택지 발생 이미지가 나온 후 3초 후에 이미지를 숨기고 버튼을 표시하기 위해 setTimeout 사용
        const timeout = setTimeout(() => {
            setShowImage(false);
            // 선택지 발생 이미지가 완전히 사라진 후에 버튼을 표시하도록 setTimeout 사용
            setTimeout(() => {
                setShowButtons(true);
            }, 1000); // 1초 뒤에 버튼을 표시
        }, 3000); // 3초 뒤에 선택지 발생 이미지를 숨김

        // 컴포넌트가 언마운트될 때 timeout을 클리어하여 메모리 누수를 방지
        return () => clearTimeout(timeout);
    }, []);

    const handleButtonClick = () => {
        // 버튼 클릭 시 처리할 내용
    };

    return (
        <div className="container2">
            {/* 실루엣 이미지 */}
            <img src="./images/Baekleehyun_silhouette.png" className={`silhouette ${showImage ? "show" : ""}`} alt="실루엣" />

            {/* 선택지 발생 이미지 */}
            {showImage && <img src="./images/선택지발생.png" className={`ss ${showImage ? "show" : ""}`} alt="선택지 발생" />}

            {/* 버튼 표시 여부에 따라 조건부 렌더링 */}
            {showButtons && (
                <>
                    <button className="btn" onClick={handleButtonClick}>
                        <img src="./images/StartBtn.png" alt="시작 버튼" />
                    </button>
                    <button className="btn" onClick={handleButtonClick}>
                        <img src="./images/StartBtn.png" alt="시작 버튼" />
                    </button>
                </>
            )}
        </div>
    );

}