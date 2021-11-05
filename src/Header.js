import './Header.css';
import logo from './images/logo-white.jpg';
function Header(){
    return (
        <header>
            <a href="#" className='logo' >
                <img src={logo} alt='logo' draggable='false' />
            </a>
            <nav>
                <a href='#'>about us</a>
                <a href='#'>story</a>
                <a href='#'>contact</a>
            </nav>
            <span></span>
        </header>
    )
}
export default Header;