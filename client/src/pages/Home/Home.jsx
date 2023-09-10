import FeaturedRecipe from '../../components/FeaturedRecipe/FeaturedRecipe'
import Main from '../../components/Main/Main'
import './Home.scss'

const Home = () => {
    return (
        <div className='container'>
            <Main/>
            <FeaturedRecipe/>
            Home
        </div>
    )
}

export default Home