import "../css/all.css";

import baekLeeHyunRoute from '../json/baekLeeHyunRoute3.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";

function BaekLeeHyunRouteEnd() {
   
    const select1 = "아니요 진짜 재밌는 것 같아요!";
    const select2 = "하하, 저는 그런 거에 관여하지 않습니다, 선배님.";

    const end = "/GoodStudentCouncil"
    const goodEnd = "/BaekLeeHyunGoodEnding"
    const silhouette = "baekLeeHyun"
    return (
        <>
            <Dialogue routeData={baekLeeHyunRoute} select1={select1} select2={select2} end={end} goodEnd={goodEnd} silhouette={silhouette}/>
        </>
    );

}

export default BaekLeeHyunRouteEnd