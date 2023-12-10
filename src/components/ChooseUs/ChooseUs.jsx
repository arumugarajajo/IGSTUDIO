import React from "react";
import style from "./ChooseUs.module.css";
import Button from "../Button/Button";
import gift from "../../Assets/Gift.png";
function ChooseUs() {
  return (
    <div className={style.container}>
      <h2>Why Choose us?</h2>
      <div className={style.chooseus}>
        <div className={style.grid}>
          <div className={style.imgcontainer}>
            <img src={gift} alt="" />
          </div>
          <h5>98% Success Rate</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <Button children={"Read More"} />
        </div>
        <div className={style.grid}>
          <div className={style.imgcontainer}>
            <img src={gift} alt="" />
          </div>
          <h5>100% Success Rate</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <Button children={"Read More"} />
        </div>
        <div className={style.grid}>
          <div className={style.imgcontainer}>
            <img src={gift} alt="" />
          </div>
          <h5>100% Success Rate</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <Button children={"Read More"} />
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
