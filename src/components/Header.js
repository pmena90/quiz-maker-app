import { NavLink } from 'react-router-dom/dist';
import logo from '../logo.svg';

function Header() {
    return (
        <nav className='navbar navbar-light navbar-expand-lg bg-light'>
            <div className='container'>
                <NavLink className='navbar-brand d-flex align-items-center' to='/'>
                    <button className='navbar-toggler me-2' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <img src={logo} alt='Logo' width='80' className='d-none d-lg-block' />
                    <h4 className='header-title mb-0'>Quiz App</h4>
                </NavLink>
                <div className='collapse navbar-collapse' id='navbarTogglerDemo02' >
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <NavLink className='nav-link' to='storage-demo'>Storage Demo</NavLink>
                        <NavLink className='nav-link' to='modal-demo'>Modal Demo</NavLink>
                        <NavLink className='nav-link' to='autofilter-demo'>Autofilter Demo</NavLink>
                    </ul>
                </div>
            </div>
        </nav >
    );
}

export default Header;