import React from "react";
import style from "./Footer.module.css";
import logo from "../../Assets/logo.png";
import Instagram from "../../Assets/Instagram.png"
import Facebook from "../../Assets/Facebook.png"
import Twitter from "../../Assets/Twitter.png"
import Pintrest from "../../Assets/Pintrest.png"
function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.logoNavbar}>
        <div className={style.navtop}>
          <img src={logo} alt="logo" />
          <span>IGSTUDIO</span>
        </div>
        <div className={style.navbarLi}>
          <ul>
            <li>Home</li>
            <li>Attorneys</li>
            <li>Practice Areas</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className={style.navtop}>
          <span> <img src={Instagram} alt="Instagram" /></span>
          <span> <img src={Facebook} alt="Facebook" /></span>
          <span> <img src={Twitter} alt="Twitter" /></span>
          <span> <img src={Pintrest} alt="Pintrest" /></span>
        </div>
      </div>
      <div className={style.footerbottom}>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
}

export default Footer;
