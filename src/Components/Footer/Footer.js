import { useRef } from "react";
import './Footer.css';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import Whatsapp from "../Assets/whatsappQr.jpg";
import Instagram from "../Assets/instaQR.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>COMPANY</h4>
                        <Link to="/aboutus"><p>About Us</p></Link>
                        <Link to="/contactus"><p>Contact Us</p></Link>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>SHOP</h4>
                        <a href="/laptop"><p>Laptop</p></a>
                        <a href="/cctv"><p>CCTV Camera</p></a>
                        <a href="/printer"><p>Printer</p></a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>QUICK LINKS</h4>
                        <Link to="/shippingpolicy"><p>Shipping Policy</p></Link>
                        <Link to="/termscondition"><p>Terms & Conditions</p></Link>
                        <Link to="/refundsreplace"><p>Refund&Replacement</p></Link>
                        <Link to="/privacypolicy"><p>Privacy Policy</p></Link>
                    </div>
                    <div className="sb__footer-links_div_img">
                        <img src={Whatsapp} width={"100px"} height={"100px"} />
                    </div>
                    <div className="sb__footer-links_div_img">
                        <img src={Instagram} width={"100px"} height={"100px"} />
                    </div>
                </div>
                <p style={{ color: "white", textAlign: "center" }}><FaLocationDot /> 34/15, Balavinayagar Kovil Street, Tuticorin - 628002</p>
                <p style={{ color: "white", textAlign: "center" }}><CallIcon /> 8754309295</p>
                <hr />
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>@{new Date().getFullYear()} Hi-Fi IT Park. All rights reserved.</p>
                    </div>
                    <div className="sb__footer-links_div">
                        <div className="socialmedia">
                            <div><a href="https://www.facebook.com/profile.php?id=61560236537282&mibextid=ZbWKwL"><FaFacebook /></a></div>
                            <div><a href="https://www.instagram.com/hifi_itpark_fmcg/"><FaSquareInstagram /></a></div>
                            <div><a href="https://fmcg.hifiitpark.com/"><CgWebsite /></a></div>
                            <div><a href="https://wa.me/918098309295"><IoLogoWhatsapp /></a></div>
                            <div><a href="mailto:fmcg@hifiitpark.com"><IoMail /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
