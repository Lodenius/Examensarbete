import '../styles/Footer.scss';

//icons
import logo from '../assets/icons/title.png';
import phone from '../assets/icons/phone.svg';
import instagram from '../assets/icons/instagram.svg';
import facebook from '../assets/icons/facebook.svg';

function Footer() {
    return ( 
        <footer>
            <section className='adress'>
                <h3>Adress</h3>
                <p>Hammarby slussväg 4, <br></br> 118 60, Stockholm</p>
            </section>
            <section className='logo-img'>
                <img src={logo} alt="logo" />
                <h4>Examensarbete av <a href="https://github.com/Lodenius"> Philippa Lodenius 2024</a></h4>
            </section>
            <section className='contact'>
                <h3>Kontakt</h3>
                <section className='contact__icons'>
                    <img src={phone} alt="" />
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                </section>
            </section>

        </footer>
     );
}

export default Footer;