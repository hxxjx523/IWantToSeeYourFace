import "./css/all.css";
import opening from './json/opening.json'; 
import Dialogue from "./Dialogue";
function Opening() {

    return (
        <Dialogue routeData={opening} chapter={"firstStory"}/>
    );
}

export default Opening