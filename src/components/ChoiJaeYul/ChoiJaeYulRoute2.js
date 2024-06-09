import "../css/all.css";
import choiJaeYulRoute from '../json/ChoiJaeYulRoute2.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";
// import BaekleehyunSilhouette from '../images/Baekleehyun/Baekleehyun_silhouette.png'; // 이미지 경로에 맞게 수정

function ChoiJaeYulRoute2() {
    const select1 = "아니, 안 해봤어"; // 선택지 1
    const select2 = "윽.. 오타쿠야?"; // 선택지 2
    const end = "/DoULikeGame"
    return (
        <>
            <Dialogue routeData={choiJaeYulRoute} chapter={"chapter3"} select1={select1} select2={select2} end={end}/>
        </>
    );
}

export default ChoiJaeYulRoute2;