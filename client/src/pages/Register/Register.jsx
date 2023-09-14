import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import "./Register.scss";

const initialUser = {
    name: "",
    password: "",
    email: "",
    cnfPassword: ""
};

const Register = () => {
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
        <div className="register-container">
            <div className="register-card">
                <div className="card-left">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            value={user.name}
                        />
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
                            {view === 'password' ? <BsFillEyeSlashFill className="eye-icon" onClick={handleView}/> : <BsFillEyeFill className="eye-icon active" onClick={handleView} />}
                            <input
                                type={view}
                                name="cnfPassword"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                value={user.cnfPassword}
                            />
                        </span>
                        <button type="submit">Register</button>
                    </form>
                </div>
                <div className="card-right">
                    <h1>Spice <span className="fancy">Chef</span></h1>
                    <p>
                        Welcome to <span className="fancy">Spice Chef</span>! Register now to explore a world of delicious recipes and culinary inspiration. Join our community and start your flavorful journey today.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
