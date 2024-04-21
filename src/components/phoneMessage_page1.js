import "./css/all.css";
import "./css/phoneMessage.css";

export default function PhoneMessage_page1(){
    return(
         <div style={{backgroundImage: "../../public/images/message1.png" }}>
             <a href="/phoneMessage"><button className="preBtn">X</button></a>
         </div>
    );
}