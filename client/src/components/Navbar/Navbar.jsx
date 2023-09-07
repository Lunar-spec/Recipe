import { LuChefHat } from 'react-icons/lu'
import './Navbar.scss'
import { Link } from 'react-router-dom'

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

    return (
        <div className='navbar'>
            <Link to={'/'} className='logo'>
                Spice Chef
                <LuChefHat size={32} strokeWidth={1} className='icon' />
            </Link>
            <div className='links'>
                {/* <DarkModeToggle /> */}
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
    )
}

export default Navbar