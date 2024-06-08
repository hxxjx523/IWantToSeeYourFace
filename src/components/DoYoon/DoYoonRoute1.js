import "../css/all.css";
import DoYoonRoute from '../json/DoYoonRoute1.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "../Dialogue";

function DoYoonRoute1(){
    return (
        <Dialogue routeData={DoYoonRoute} chapter={"chapter2"}/>
    );
}

export default DoYoonRoute1;