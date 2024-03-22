import '../styles/Header.scss';
import Menu from './Menu';

import logo from '../assets/imgs/title-logo.png';

function Header() {

    return (
        <header>
            <h1>STOCKHOLM <span className='logo-icon'>B&nbsp;DMINT</span>ON</h1>
            <Menu />
        </header>
    )
}

export default Header;