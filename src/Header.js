import './Header.css';
import logo from './images/logo-white.jpg';
function Header(){
    return (
        <div>
            <header>
                <a href="#" className='logo' >
                    <img src={logo} alt='logo' draggable='false' />
                </a>
                <nav>
                    <a href='/'>home</a>
                    <a href='/about'>about us</a>
                    <a href='/story'>story</a>
                    <a href='/contact'>contact</a>
                </nav>
                <span></span>
            </header>
            <div id='spacer'></div>
        </div>
    )
}
export default Header;