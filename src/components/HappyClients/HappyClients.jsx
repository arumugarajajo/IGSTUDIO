import React from "react";
import style from "./HappyClients.module.css";
import leftarrow from "../../Assets/leftarrow.png";
import rightarrow from "../../Assets/rightarrow.png";
import janeCooper from "../../Assets/JaneCooper.png"
import davonLane from "../../Assets/DevonLane.png"
import RobertFox from "../../Assets/RobertFox.png"
function HappyClients() {
  return (
    <div className={style.happyClient}>
      <div className={style.topPortion}>
        <h2>What says our happy Clients</h2>
        <div className={style.arrowPortion}>
          <div className={style.arrow}>
            <img src={leftarrow} alt="" className={style.img} />
          </div>
          <div className={style.arrow}>
            <img src={rightarrow} alt="" className={style.img} />
          </div>
        </div>
      </div>
      {/* carousel */}
      <div className={style.carousel}>
        <div className={style.grid}>
          <div className={style.imgcontainer}>
            <img src={janeCooper} alt="janeCooper" />
          </div>
          <h5>Jane Cooper</h5>
          <h6>Ceo of Hunt</h6>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>
        <div className={style.grid}>
          <div className={style.imgcontainer}>
            <img src={davonLane} alt="davonLane" />
          </div>
          <h5>Devon Lane</h5>
          <h6>Ceo of Hunt</h6>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>
        <div className={style.grid}>
          <div className={style.imgcontainer}>
            <img src={RobertFox} alt="RobertFox" />
          </div>
          <h5>Robert Fox</h5>
          <h6>Ceo of Hunt</h6>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
            dolor do amet sint. Velit officia
          </p>
        </div>
      </div>
    </div>
  );
}

export default HappyClients;
