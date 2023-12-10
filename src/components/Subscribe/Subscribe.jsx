import React from "react";
import style from "./Subscribe.module.css";
function Subscribe() {
  return (
    <div className={style.subscribe}>
      <div className={style.container}>
        <h2>Subscribe Our Newsletter</h2>
        <div className={style.userInput}>
          <input type="text" placeholder="Name" className={style.name} />
          <input type="email" placeholder="Enter Your Email" id="email" />
          <button>send</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
