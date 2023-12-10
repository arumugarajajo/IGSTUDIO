import React from "react";
import style from "./OurTeam.module.css";
import Danial from "../../Assets/DanielDef.png";
import sanfole from "../../Assets/Sanfole.png";
import cesforilla from "../../Assets/Cesforilla.png";
import colleen from "../../Assets/Colleen.png";
import Haldone from "../../Assets/Haldone.png";
import Nik from "../../Assets/NikJoe.png";
function OurTeam() {
  return (
    <div className={style.ourteam}>
      <h2>Our Team</h2>
      <div className={style.profileContainer}>
        <div className={style.teamProfile}>
          <div className={style.image}>
            <img src={Danial} alt="Danial" />
          </div>
          <div className={style.text}>
            <h3>Danial Def</h3>
            <p>301 cases</p>
          </div>
        </div>
        <div className={style.teamProfile}>
          <div className={style.image}>
            <img src={sanfole} alt="sanfole" />
          </div>
          <div className={style.text}>
            <h3>sanfole</h3>
            <p>850 cases</p>
          </div>
        </div>
        <div className={style.teamProfile}>
          <div className={style.image}>
            <img src={cesforilla} alt="cesforilla" />
          </div>
          <div className={style.text}>
            <h3>Cesforilla</h3>
            <p>470 cases</p>
          </div>
        </div>
        <div className={style.teamProfile}>
          <div className={style.image}>
            <img src={colleen} alt="colleen" />
          </div>
          <div className={style.text}>
            <h3>Colleen</h3>
            <p>180 cases</p>
          </div>
        </div>
        <div className={style.teamProfile}>
          <div className={style.image}>
            <img src={Haldone} alt="Haldone" />
          </div>
          <div className={style.text}>
            <h3>Haldone</h3>
            <p>212 cases</p>
          </div>
        </div>
        <div className={style.teamProfile}>
          <div className={style.image}>
            <img src={Nik} alt="nik" />
          </div>
          <div className={style.text}>
            <h3>Nik Joe</h3>
            <p>350 cases</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
