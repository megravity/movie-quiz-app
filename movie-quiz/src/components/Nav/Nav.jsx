import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className='navigator'>
            <ul>
                <li>
                    <NavLink to='/'>
                        <h5>Movie Quiz</h5>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='help'>
                        <h5>Help</h5>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default Nav;
