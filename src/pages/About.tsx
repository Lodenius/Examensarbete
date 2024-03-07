import Header from "../components/Header";
import '../styles/About.scss';

// imgs
import mainImg from '../assets/imgs/photo-1626721105368-a69248e93b32.webp'


function About() {
    return ( 
        <section>
                <Header />
            <section>
                <h1>ABOUT</h1>
                <img src={mainImg} alt="" className="main-img"/>
            </section>
        </section>
     );
}

export default About;