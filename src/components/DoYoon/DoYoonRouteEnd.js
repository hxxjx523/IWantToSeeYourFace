import "../css/all.css";

import DoYoonRoute from '../json/DoYoonRoute3.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";

function DoYoonRouteEnd() {
   
    const select1 = "150도에 15분";
    const select2 = "250도에 10분";

    const end = "/badCook"
    const goodEnd = "/doYoonGoodEnding"
    const silhouette = "Doyoon"

    return (
        <>
            <Dialogue routeData={DoYoonRoute} select1={select1} select2={select2} end={end} goodEnd={goodEnd} silhouette={silhouette}/>
        </>
    );

}

export default DoYoonRouteEnd