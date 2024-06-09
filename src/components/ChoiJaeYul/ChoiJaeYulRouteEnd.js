import "../css/all.css";
import choiJaeYulRoute from '../json/ChoiJaeYulRoute3.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";
// import BaekleehyunSilhouette from '../images/Baekleehyun/Baekleehyun_silhouette.png'; // 이미지 경로에 맞게 수정

function ChoiJaeYulRouteEnd() {
    const select1 = "함부로 볼 수 없으니 가만히 기다린다";
    const select2 = "궁금하니깐 책장의 책을 본다";

    const end = "/WorstGuest"
    const goodEnd = "/ChoiJaeYulGoodEnding"
    const silhouette = "choiJaeYul"
    return (
        <>
            <Dialogue routeData={choiJaeYulRoute} select1={select1} select2={select2} end={end} goodEnd={goodEnd} silhouette={silhouette}/>
        </>
    );
}

export default ChoiJaeYulRouteEnd;