import React, { useState } from "react";
import style from "./NavbarWithProfileContainer.module.css";
import logo from "../../Assets/logo.png";
import message from "../../Assets/message.png";
import Button from "../../components/Button/Button";
import profile from "../../Assets/profile.png";
import bg from "../../Assets/bg.png";
function NavbarWithProfileContainer() {
  const [showList, setShowList] = React.useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.logoNavbar}>
        <div className={style.navtop}>
          <img src={logo} alt="logo" />
          <span>IGSTUDIO</span>
        </div>
        <div className={style.navbarLi}>
          <ul onClick={toggleList}>
            <li>
              <i className="fas fa-home"></i>
            </li>
            {showList && (
              <>
                <li>Attorneys</li>
                <li>Practice Areas</li>
                <li>About Us</li>
              </>
            )}
          </ul>
        </div>
        <div className={style.navtop}>
          <button>Contact Now</button>
        </div>
      </div>
      <div className={style.profileContainer}>
        <div className={style.leftPortion}>
          <h2>
            You don’t have to <span> Fight them Alone.</span>
          </h2>
          <p className={style.para}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <div className={style.message}>
            <div>
              <img src={message} alt="message" />
              <input type="email" placeholder="Enter your eamil address" />
            </div>
            <Button children="Let’s Talk" className={style.rightCornerButton} />
          </div>
        </div>
        <div className={style.rightPortion}>
          <div className={style.rightprofileContainer}>
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarWithProfileContainer;
