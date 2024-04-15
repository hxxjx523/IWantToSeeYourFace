import "./css/all.css";
import "./css/phoneNumber.css";

export default function PhoneNumber(){
    return (
        <div className="background">
            <a href="phone_home.html"><button className="homeBtn">X</button></a>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <br/><a href="profile_Doyoon.html" className="name"><button>도윤</button></a><br/><br/>
                <a href="profile_Baekleehyun.html" className="name"><button>백이현</button></a><br/><br/>
                <a href="profile_Choijaeyul.html" className="name"><button>최재율</button></a>
            </div>
        </div>
    );
}