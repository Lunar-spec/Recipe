import Categories from '../../components/Categories/Categories'
import FeaturedRecipe from '../../components/FeaturedRecipe/FeaturedRecipe'
import Main from '../../components/Main/Main'
import './Home.scss'

const Home = () => {
    return (
        <div className='container'>
            <Main />
            <FeaturedRecipe />
            <Categories />
        </div>
    )
}

export default Home