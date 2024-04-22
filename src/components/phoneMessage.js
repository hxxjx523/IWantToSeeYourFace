import "./css/all.css";
import "./css/phoneMessage.css";

export default function PhoneMessage(){
    return(
        <div className="background3">
            <a href="/phoneHome"><button className="preBtn"></button></a>
            <a href="/phoneMessage_page1"><button>메세지</button></a>
        </div>
    );
}