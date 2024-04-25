import "./css/all.css";
import "./css/chapterTitle.css";

export default function ChapterTitle(){
    document.body.style.backgroundColor = `#A87BE2`;
    return (
        <div>
            <div className="background5">
                <div className="txt">첫번째</div>
                <div className="titleTxt">첫만남</div>
            </div>
        </div>
    );
}