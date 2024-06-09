import "./css/all.css";

import firstStory from './json/firstStory.json'; // JSON 파일 경로에 맞게 수정
import Dialogue from "./Dialogue";
function FirstStory(){

    return (
        <Dialogue routeData={firstStory} chapter={"chapter1"}/>
    );

}

export default FirstStory