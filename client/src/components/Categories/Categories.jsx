import { Link } from 'react-router-dom';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';
import { useState } from 'react';
import './Categories.scss';


const data = [
    {
        catName: 'Vegan',
        image: 'https://images.unsplash.com/photo-1551266519-b6713933ebd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80',
        url: '/blogs/veg'
    },
    {
        catName: 'Non-Vegan',
        image: 'https://images.unsplash.com/photo-1690983322025-aab4f95a0269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        url: '/blogs/non-veg'
    },
    {
        catName: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        url: '/blogs/breakfast'
    },
    {
        catName: 'Lunch',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        url: '/blogs/lunch'
    },
    {
        catName: 'Dinner',
        image: 'https://images.unsplash.com/photo-1571805381873-a5e51f692c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        url: '/blogs/dinner'
    },
    {
        catName: 'Snack',
        image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        url: '/blogs/snack'
    },
    {
        catName: 'Dessert',
        image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        url: '/blogs/dessert'
    },
    {
        catName: 'Seafood',
        image: 'https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
        url: '/blogs/seafood'
    },
    {
        catName: 'Italian',
        image: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        url: '/blogs/italian'
    },
    {
        catName: 'Indian',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1921&q=80',
        url: '/blogs/indian'
    },
];


const Categories = () => {
    const [showAllCategories, setShowAllCategories] = useState(false);

    const numCategoriesToShow = showAllCategories ? data.length : 5;

    return (
        <div className='categories-container'>
            <span className='heading'>Popular Categories
                <span className="sub-heading">
                    Explore Our <span className="fancy">Culinary</span> Categories
                </span>
            </span>
            <div className="card-container">
                {data.slice(0, numCategoriesToShow).map((item, index) => (
                    <div key={index}>
                        <Link to={item.url} className='card'>
                            <div className='item-img'>
                                <img src={item.image} alt={item.catName} className='item-img' />
                            </div>
                            <span className='item-name'>{item.catName}</span>
                        </Link>
                    </div>
                ))}
            </div>
            <span className='view-btn' onClick={() => setShowAllCategories(!showAllCategories)}>
                {showAllCategories ? 'View less' : 'View more'}
                {showAllCategories ? (<IoIosArrowDropupCircle className='view-icon' />) : (<IoIosArrowDropdownCircle className='view-icon' />)}
            </span>
        </div>
    );
}

export default Categories;
