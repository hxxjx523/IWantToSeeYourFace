import "./css/all.css";
import "./css/phoneHome.css";

export default function PhoneHome(){
    return (
        <div className="background1">
            <div className="app">
                <a href="/PhoneNumber"><button><img src="./images/phone_addressApp.png" alt="" width="70px"/></button></a>
                <a href=""><button><img src="./images/phone_callApp.png" alt="" width="70px"/></button></a>
                <a href="/PhoneMessage"><button><img src="./images/phone_messageApp.png" alt="" width="70px"/></button></a>
                <a href="gallery.html"><button><img src="./images/phone_galleryApp.png" alt="" width="70px"/></button></a>
            </div>
        </div>
    );
}