import Categories from '../../components/Categories/Categories'
import FeaturedRecipe from '../../components/FeaturedRecipe/FeaturedRecipe'
import SuperDelicious from '../../components/SuperDelicious/SuperDelicious.jsx'
import Main from '../../components/Main/Main'
import './Home.scss'
import Newsletter from '../../components/Newsletter/Newsletter'

const Home = () => {
    return (
        <div className='container'>
            <Main />
            <FeaturedRecipe />
            <Categories />
            <SuperDelicious />
            <Newsletter/>
        </div>
    )
}

export default Home