import "../css/all.css";
import baekLeeHyunRoute from '../json/baekLeeHyunRoute2.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";
// import BaekleehyunSilhouette from '../images/Baekleehyun/Baekleehyun_silhouette.png'; // 이미지 경로에 맞게 수정

function BaekLeeHyunRoute2() {
    const select1 = "기다린다"; // 선택지 1
    const select2 = "기다리지 않는다"; // 선택지 2
    const end = "/WaitingPerson"
    return (
        <>
            <Dialogue routeData={baekLeeHyunRoute} chapter={"chapter3"} select1={select1} select2={select2} end={end}/>
        </>
    );
}

export default BaekLeeHyunRoute2;