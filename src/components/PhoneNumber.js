import "./css/all.css";
import styles from "./css/phoneNumber.module.css";

export default function PhoneNumber(){
    return (
        <div className={styles.background}>
            <a href="/PhoneHome"><button className={styles.preBtn}></button></a>
            <br/>
            <br/>
            <br/>
            {/* <div className="container2">
                <br/><a href="profile_Doyoon.html" className="name"><button>도윤</button></a><br/><br/>
                <a href="profile_Baekleehyun.html" className="name"><button>백이현</button></a><br/><br/>
                <a href="profile_Choijaeyul.html" className="name"><button>최재율</button></a>
            </div> */}
        </div>
    );
}