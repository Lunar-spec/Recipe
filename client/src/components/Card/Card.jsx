/* eslint-disable react/prop-types */
import './Card.scss'
import { FaStar } from 'react-icons/fa6'

const Card = ({ item }) => {
    // console.log(item)
    return (
        <div className="main-card-container">
            <div className='card-container'>
                <img src={item.image} alt={item.name} className='item-img' />
                <span className="rating"><FaStar />{item.rating}</span>
                <div className="card-details">
                    <h3>{item.name}</h3>
                    <span>Posted By: {item.createdBy}</span>
                </div>
            </div>
        </div>
    )
}

export default Card