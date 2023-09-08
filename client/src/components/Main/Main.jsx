import './Main.scss'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className="main-container">
            <h2 className='sub-title'>Savor & Share</h2>
            <div className='first-section'>
                <h1 className="title">Spice</h1>
            </div>
            <Link><span className='browse-button'>Explore Now</span></Link>
            <div className="second-section">
                <h1 className="title">Chef</h1>
            </div>
        </div>
    )
}

export default Main
