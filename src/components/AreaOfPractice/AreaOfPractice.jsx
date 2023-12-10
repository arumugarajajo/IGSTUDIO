import React from "react";
import style from "./AreaOfPractice.module.css";
import businesslaw1 from "../../Assets/BusinessLaw.png";
import businesslaw2 from "../../Assets/Bussiness.png";
import landlord from "../../Assets/LandLoard.png";
import partnership from "../../Assets/PartnerShipLaw.png";
import realestate from "../../Assets/RealEstate.png";
import elderabuse from "../../Assets/ElderAbuse.png";
function AreaOfPractice() {
  return (
    <div className={style.AreaOfPractice}>
      <h2>Area of Practices</h2>
      <div className={style.flexContainer}>
        <div className={style.imageWithText}>
          <img src={businesslaw1} alt="businesslaw1" />
          <span>Business Law</span>
        </div>
        <div className={style.imageWithText}>
          <img src={partnership} alt="partnership" />
          <span>Partnership LAW</span>
        </div>
        <div className={style.imageWithText}>
          <img src={realestate} alt="realestate" />
          <span>REAL ESTATE LAW</span>
        </div>
        <div className={style.imageWithText}>
          <img src={businesslaw2} alt="businesslaw2" />
          <span>BUSINESS LAW</span>
        </div>
        <div className={style.imageWithText}>
          <img src={landlord} alt="landlord" />
          <span>LANDLORD DISPUTES</span>
        </div>
        <div className={style.imageWithText}>
          <img src={elderabuse} alt="elderabuse" />
          <span>ELDER ABUSE</span>
        </div>
      </div>
    </div>
  );
}

export default AreaOfPractice;
