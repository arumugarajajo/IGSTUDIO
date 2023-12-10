import React from "react";
import style from "./Introduce.module.css";
function Introduce() {
  return (
    <div className={style.introduce}>
      <div className={style.leftIntroduce}>Let’s Introduce Ourself</div>
      <hr className={style.hr} />
      <div className={style.rightIntroduce}>
        <h4>Criminal Lawyer</h4>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}

export default Introduce;
