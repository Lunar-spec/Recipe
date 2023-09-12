import { Link } from 'react-router-dom';
import './SuperDelicious.scss'

const sweet = [
    {
        id: 1,
        title: 'Pastry',
        rating: '4.7',
        image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        url: '/blogs/1',
    },
    {
        id: 2,
        title: 'Chocolate Chip Cookies',
        rating: '4.5',
        image: 'https://images.unsplash.com/photo-1600454252672-d87dc589afdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        url: '/blogs/2',
    },
    {
        id: 3,
        title: 'Red Velvet Cake',
        rating: '4.6',
        image: 'https://images.unsplash.com/photo-1617303673484-b96719ae86c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        url: '/blogs/3',
    },
];

const drinks = [
    {
        id: 4,
        title: 'Iced Tea',
        rating: '4.9',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
        url: '/blogs/4',
    },
    {
        id: 5,
        title: 'Blue Margarita',
        rating: '4.7',
        image: 'https://images.unsplash.com/photo-1578664182354-e3878189cdac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        url: '/blogs/5',
    },
    {
        id: 6,
        title: 'Cocktail',
        rating: '4.8',
        image: 'https://images.unsplash.com/photo-1606767341197-2de041e9ad9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        url: '/blogs/6',
    },
];



const SuperDelicious = () => {
    return (
        <div className="cat-container">
            <div className='sweet-container'>
                <span className='heading'>Delicious Sweet Treats</span>
                <div className="card-container">
                    {sweet.map(item => (
                        <div className="card-sweet" key={item.id}>
                            <Link to={item.url}>
                                <img src={item.image} alt={item.title} className='item-img' />
                                <span className='item-title'>{item.title}</span>
                                <span className="item-rating">{item.rating}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='delicious-container'>
                <span className='heading'>Sip-Worthy Choices</span>
                <div className="card-container">
                    {drinks.map(item => (
                        <div className="card-sweet" key={item.id}>
                            <Link to={item.url}>
                                <img src={item.image} alt={item.title} className='item-img' />
                                <span className='item-title'>{item.title}</span>
                                <span className="item-rating">{item.rating}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SuperDelicious