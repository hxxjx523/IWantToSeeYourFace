import "./css/all.css";
import "./css/story.css";
import "./css/phoneHome.css";

export default function phoneHome(){
    return (
        <div className="background">

        <div class="app">
            <a href="phone_phoneNumber.html"><button><img src="./images/phone_address.png" alt="" width="70px"/></button></a>
            <a href=""><button><img src="./images/phone_call.png" alt="" width="70px"/></button></a>
            <a href="message.html"><button><img src="./images/phone_message.png" alt="" width="70px"/></button></a>
            <a href="gallery.html"><button><img src="./images/phone_gallery.png" alt="" width="70px"/></button></a>
        </div>
        </div>
    );
}