/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './Card.scss'
import { PiStarFill } from 'react-icons/pi'

const Card = ({ item }) => {
    // console.log(item)
    return (
        <div className="main-card-container">
            <Link to={`/blogs/${item.id}`}>
                <div className='card-container'>
                    <img src={item.image} alt={item.name} className='item-img' />
                    <span className="rating"><PiStarFill className='rating-icon' />{item.rating}</span>
                    <div className="card-details">
                        <h3>{item.name}</h3>
                        <span>Posted By: {item.createdBy}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card