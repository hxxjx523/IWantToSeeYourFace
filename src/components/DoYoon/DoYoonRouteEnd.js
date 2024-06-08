import "../css/all.css";

import baekLeeHyunRoute from '../json/baekLeeHyunRoute3.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";

function DoYoonRouteEnd() {
   
    const select1 = "150도에 15분";
    const select2 = "250도에 10분";

    const end = "/BadCook"
    const goodEnd = "/DoyoonGoodEnding"
    return (
        <>
            <Dialogue routeData={baekLeeHyunRoute} select1={select1} select2={select2} end={end} goodEnd={goodEnd}/>
        </>
    );

}

export default DoYoonRouteEnd