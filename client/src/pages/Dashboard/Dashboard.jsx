import './Dashboard.scss'
import {Link} from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Link to={'/dashboard/login'}>Login</Link>
            <br />
            <Link to={'/dashboard/register'}>Register</Link>
        </div>
    )
}

export default Dashboard
