import { Link } from 'react-router-dom'
import { GiAstronautHelmet } from 'react-icons/gi'
import './NotFound.scss'
import { useState } from 'react';

const NotFound = () => {
    const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';


    const [code, setCode] = useState('Here you found it!');

    const handleAnimate = (event) => {
        let iteration = 0

        const interval = setInterval(() => {
            setCode(code
                .split('')
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index]
                    }
                    return alphanumeric[Math.floor(Math.random() * 10)]
                })
                .join(''))

            if (iteration >= event.target.dataset.value.length) clearInterval(interval)
            iteration += 1 / 4
        }, 10)
    }


    return (
        <div className='notfound-container'>
            <h3 onMouseOver={(event) => handleAnimate(event)} data-value='The legendary 404!'>{code}</h3>
            <span>You know the drill right?</span>
            <Link to={'/'} className='home-button'><GiAstronautHelmet /></Link>
        </div>
    )
}

export default NotFound