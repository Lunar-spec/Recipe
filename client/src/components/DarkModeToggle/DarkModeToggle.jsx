import './DarkModeToggle.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const DarkModeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext)

    return (
        <div className='switch-container' onClick={toggle}>
            <div className="toggle-icon">🌙</div>
            <div className="toggle-icon">🔆</div>
            <div className="ball" style={mode === 'light' ? { left: '2px' } : { right: '2px' }} />
        </div>
    )
}

export default DarkModeToggle