import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

import './Login.scss'

const initialUser = {
    password: "",
    email: "",
};


const Login = () => {
    const [user, setUser] = useState(initialUser)
    const [view, setView] = useState('password')

    const handleChange = ({ target }) => {
        setUser(currentUser => ({
            ...currentUser,
            [target.name]: target.value
        }))
    }

    const handleView = () => {
        view === 'password' ? setView('text') : setView('password')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //remove cnf password and then send the data to the backend
        console.log(user)
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="card-left">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={user.email}
                        />
                        <span className="password">
                            <input
                                type={view}
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                value={user.password}
                            />
                            {view === 'password' ? <BsFillEyeSlashFill className="eye-icon" onClick={handleView} /> : <BsFillEyeFill className="eye-icon active" onClick={handleView} />}
                        </span>
                        <button type="submit">Login</button>
                    </form>
                </div>
                <div className="card-right">
                    <h1>Spice <span className="fancy">Chef</span></h1>
                    <p>
                        <span className="fancy">Log in</span> to access your delicious recipes and culinary inspiration.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login
