import "../css/all.css";
import DoYoonRoute from '../json/DoYoonRoute2.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";

function DoYoonRoute2(){

    const select1 = "응, 그런데?"
    const select2 = "아닌데.."

    const end = "/NotMe"
    const silhouette = "Doyoon"

    return (
        <>
            <Dialogue routeData={DoYoonRoute} chapter={"chapter3"} select1={select1} select2={select2} end={end} silhouette={silhouette}/>
        </>
    );
}

export default DoYoonRoute2;