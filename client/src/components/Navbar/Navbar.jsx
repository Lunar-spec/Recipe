import { LuChefHat } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { ThemeContext } from '../../context/ThemeContext'

import './Navbar.scss'

const links = [
    {
        id: 1,
        title: "Home",
        url: '/',
    },
    {
        id: 2,
        title: "Blog",
        url: '/blogs',
    },
    {
        id: 3,
        title: "Dashboard",
        url: '/dashboard',
    },
]

const Navbar = () => {

    const { mode } = useContext(ThemeContext)

    const [navBg, setNavBg] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 60) {
            setNavBg(true)
        } else {
            setNavBg(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={"navbar-container"}>
            <div className={`${navBg ? `navbar ${mode === 'light' ? 'bg-light' : 'bg-dark'}` : 'navbar'}`}>
                <Link to={'/'} className='logo'>
                    Spice Chef
                    <LuChefHat size={32} strokeWidth={1} className='icon' />
                </Link>
                <div className='links'>
                    <DarkModeToggle />
                    {links.map(link => (
                        <Link key={link.id} to={link.url} className='link'>
                            {link.title}
                        </Link>
                    ))}
                    <button
                        className='logout'
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar