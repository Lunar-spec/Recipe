import "./Footer.scss";
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <div className="first-section">
                <form>
                    <span className="newsletter-title">Sign up to our newsletters:</span>
                    <span className="newsletter-form">
                        <input type="email" placeholder="Email" />
                        <button type="submit">Add me</button>
                    </span>
                </form>
            </div>
            <div className="second-section">
                <div className="section">
                    <div className="about">
                        <h3>About:</h3>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero quae natus corrupti delectus incidunt ex rem temporibus nesciunt iure debitis quod animi odio architecto aspernatur possimus sapiente, vel facere.</span>
                    </div>
                    <div className="links">
                        <h3>Links:</h3>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/contact'}>Contact</Link>
                        <Link to={'/blogs'}>Blog</Link>
                        <Link to={'/dashboard/register'}>Register</Link>
                    </div>

                    <div className="socials">
                        <Link to={'#'}><FaFacebook className="icons" /></Link>
                        <Link to={'#'}><FaTwitter className="icons" /></Link>
                        <Link to={'#'}><FaInstagram className="icons" /></Link>
                        <Link to={'#'}><FaYoutube className="icons" /></Link>
                    </div>
                </div>

                <div className="copyright">
                    ©Copyright 2023 Spice Chef
                </div>
            </div>
        </div>
    );
};

export default Footer;
