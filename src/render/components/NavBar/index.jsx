import { Link, useLocation } from 'react-router-dom';
import './style.scss';

export default function NavBar() {
    const location = useLocation().pathname.replace('/', '');
    return (
        <div id="nav-bar">
            <Link to="weather" className={!['strategy', 'telemetry'].includes(location) ? 'active' : null}>Weather</Link>
            <Link to="strategy" className={location == 'strategy' ? 'active' : ''}>Strategy</Link>
            <Link to="telemetry" className={location == 'telemetry' ? 'active' : ''}>Telemetry</Link>
        </div >
    )
}