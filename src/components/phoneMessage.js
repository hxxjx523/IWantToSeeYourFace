import "./css/all.css";
import "./css/phoneMessage.css";

export default function PhoneMessage(){
    return(
        <div>
        <a href="/phoneHome"><button className="homeBtn">X</button></a>
        <a href="/phoneMessage_page1"><button className="preBtn">메세지</button></a>
        </div>
    );
}