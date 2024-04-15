import "./css/all.css";
import "./css/story.css";

export default function Phone(){

    let popupX = (window.screen.width / 2) - (400 / 2);
    let popupY= (window.screen.height /2) - (600 / 2);
    const phoneHome = () => {
        window.open(
            '/PhoneHome', 
            '_blank', 
            'status=no, height=600, width=400, left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY + ', resizable=no'
        );
    }

    window.onresize = function() {
        window.resizeTo(420, 670); 
    };

    return(
        <button onClick={phoneHome} className="phone">
            <img src="./images/phone.png" alt="" width="150px" />
        </button>
    );
}