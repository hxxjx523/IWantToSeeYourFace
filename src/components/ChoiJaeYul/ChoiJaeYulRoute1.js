import "../css/all.css";
import choiJaeYulRoute from '../json/ChoiJaeYulRoute1.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";

function ChoiJaeYulRoute1(){
    return (
        <Dialogue routeData={choiJaeYulRoute} chapter={"chapter2"}/>
    );
}

export default ChoiJaeYulRoute1;