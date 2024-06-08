import "../css/all.css";
import baekLeeHyunRoute from '../json/baekLeeHyunRoute1.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";

function BaekLeeHyunRoute1(){
    return (
        <Dialogue routeData={baekLeeHyunRoute} chapter={"chapter2"}/>
    );
}

export default BaekLeeHyunRoute1;