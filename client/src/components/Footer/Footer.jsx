import "./Footer.scss";
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <div className="second-section">
                <div className="section">
                    <div className="about">
                        <h3>About:</h3>
                        <span>Welcome to our culinary journey! We&apos;re passionate about sharing delicious recipes and food inspiration. Explore our diverse collection of mouthwatering dishes and drinks. Join us as we embark on a flavorful adventure.</span>
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
                        <h3>Socials:</h3>
                        <span className="social-icons">
                            <Link to={'#'}><FaFacebook className="icons" /></Link>
                            <Link to={'#'}><FaTwitter className="icons" /></Link>
                            <Link to={'#'}><FaInstagram className="icons" /></Link>
                            <Link to={'#'}><FaYoutube className="icons" /></Link>
                        </span>
                    </div>
                </div>

                <div className="copyright">
                    <hr color="#E0144C" />
                    © 2023 Spice Chef - All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
