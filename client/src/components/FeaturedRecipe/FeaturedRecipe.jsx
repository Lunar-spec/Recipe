import data from '../../data.js'
import Card from '../Card/Card.jsx'
import './FeaturedRecipe.scss'

const FeaturedRecipe = () => {
    // console.log(data)

    return (
        <div className='featured-container'>
            <span className='heading'>Featured Recipes
                <span className='sub-heading'>Discover Exquisite Culinary Creations Crafted with <span className="fancy">Love</span> and <span className="fancy">Passion</span>!</span>
            </span>
            <div className="cards-container">
                {
                    data.map(item => (
                        <Card key={item.id} item={item} />
                    ))
                }
            </div>

            <button className='more-button'>Explore more...</button>
        </div>
    )
}

export default FeaturedRecipe