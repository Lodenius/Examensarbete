import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from "../components/Header";
import InfoBox from "../components/InfoBox";
import Footer from "../components/Footer";
import PageTitle from '../components/PageTitle';
import '../styles/About.scss';

// imgs
import infoBoxOne from '../assets/imgs/BlackStanding1.png';
import infoBoxTwo from '../assets/imgs/BlackStanding2.png';
import shuttlecock from '../assets/icons/Motion-blue.svg';
import map from '../assets/imgs/Map.png';
import tracks from '../assets/imgs/Track.png';
import shop from '../assets/imgs/Shop.png';
import cafe from '../assets/imgs/Cafe.png';
import pingpong from '../assets/imgs/TableTennis.png';

function About() {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();

    if (inView1) {
        controls1.start({ x: 0 });
    }
    if (inView2) {
        controls2.start({ x: 0 });
    }

    return ( 
        <section>
                <Header />
                <PageTitle 
                PageTitle='Om oss på Stockholm Badminton'/>
            <section className="about">
                <section className="about__info">
                    <InfoBox 
                    title=''
                    isReversed={true}
                    imgUrl={infoBoxOne}
                    infoBoxText="Välkommen till Stockholm Badminton! Vi är stolta över att vara en av de ledande badmintonklubbarna i Stockholm och att erbjuda en välkomnande och engagerande miljö för alla som älskar badminton.
                    Grundat med passion för sporten och gemenskapen kring den, strävar vi efter att främja badminton som en livsstil och en källa till glädje, hälsa och välbefinnande för människor i alla åldrar och färdighetsnivåer.
                    Vår klubb är mer än bara en plats att spela badminton. Det är en plats där vänner möts, där familjer skapar minnen och där individer växer både som spelare och personer. Vi är stolta över vår mångfald och välkomnar alla oavsett bakgrund, ålder eller förmåga.
                    Kom och upplev gemenskapen och glädjen med Stockholm Badminton. Oavsett om du är nybörjare eller erfaren spelare, ung eller gammal, så är du välkommen att delta i våra träningar, tävlingar och sociala evenemang. 
                    Tillsammans skapar vi minnen och stärker banden inom badmintongemenskapen i Stockholm!
                    "
                    />
                    <InfoBox 
                    title=''
                    isReversed={false}
                    imgUrl={infoBoxTwo}
                    infoBoxText="Vår tränarstab består av erfarna och entusiastiska tränare som brinner för att utveckla våra medlemmar till sina bästa 
                    versioner både på och utanför planen. Genom individuell coaching, gruppträning och tävlingar strävar vi efter att utveckla spelarens tekniska skicklighet, taktiska förståelse och mentala styrka.
                    För oss är det viktigt att främja en kultur av respekt, fair play och samarbete. Vi tror att dessa värderingar inte bara förbättrar vårt spel, utan också berikar våra liv utanför badmintonbanan.
                    Oavsett om du är en nybörjare som just börjat upptäcka glädjen med badminton eller en erfaren spelare som söker utmaningar och gemenskap, 
                    är du välkommen att bli en del av Stockholm Badminton. Tillsammans formar vi en fantastisk gemenskap där vi kan växa, lära och njuta av det vi älskar mest - badminton.
                    Ta steget och upptäck vad Stockholm Badminton har att erbjuda. Vi ser fram emot att välkomna dig till vår familj!"
                    />
                </section>
                <div></div>
                <article ref={ref1} className="about__find">
                    <section className="about__find--info">
                        <h2>
                            <motion.img
                                src={shuttlecock}
                                className='img'
                                alt="Shuttlecock icon"
                                animate={controls1}
                                initial={{ x: -1700 }}
                                transition={{ duration: 0.4 }}
                            />
                            &nbsp;Hitta hit
                        </h2>
                        <p>
                            Du hittar oss på Hammarby Slussväg 4, 118 60, Stockholm<br></br>
                            <strong>Tåg:</strong> Tunnelbana till Skanstull och 10 minuters promenad. Vi ligger bredvid Eriksdalsbadet.<br></br>
                            <strong>Bil:</strong> Från Nynäsvägen: Kör av mot Hammarbysjöstad och kör gamla Skanstullsbron och sväng av vänster direkt efter bron.
                            Från centrum: Kör av i slutet av tunneln efter Centralbron mot Södermalm och kör av höger innan gamla Skanstullsbron.
                        </p>
                    </section>
                    <img src={map} alt="" className='about__find--map'/>
                </article>
                <article ref={ref2} className="about__contact">
                    <h2>
                        <motion.img
                            src={shuttlecock}
                            className='img'
                            alt="Shuttlecock icon"
                            animate={controls2}
                            initial={{ x: -1700 }}
                            transition={{ duration: 0.6 }}
                        />
                        &nbsp;Kontakta oss
                    </h2>
                    <p>
                        Vill du kontakta vår badmintonhall? Ring oss gärna! Vi på Stockholm badminton är här för att svara på dina frågor och hjälpa dig att planera din nästa spelsession. 
                        Ring oss på <strong>08 - 642 70 02</strong> för att boka en bana, få mer information om våra tjänster eller diskutera eventuella arrangemang. 
                        Vår dedikerade personal är redo att assistera dig och se till att din badmintonupplevelse hos oss blir en succé!
                    </p>
                </article>
                <div></div>
                <section className='about__small-info'>
                    <h2>Hallen</h2>
                    <p>I hjärtat av Södermalm ligger Badmintonstadion, vi har funnits här sedan 1969. Idag har hallen över 200.000 besök årligen och är ett guldkorn som lever vidare.</p>
                    <InfoBox 
                    title='Våra banor'
                    isReversed={true}
                    imgUrl={tracks}
                    infoBoxText="Vi erbjuder 24 stycken banor där såväl golv som belysning håller tävlingstandard. Vi har även enhetlig färgsättning för att underlätta ditt spel. All utrustning som behövs finns tillgänglig att hyra eller köpa."
                    />
                    <InfoBox 
                    title='Racketshop och service'
                    isReversed={false}
                    imgUrl={shop}
                    infoBoxText="I vår shop hittar du racketar och bollar. Även andra tillbehör för ditt spel såsom skor, kläder och mycket annat. Vi erbjuder även racketservice med lagning eller omsträngning av racket."
                    />
                    <InfoBox 
                    title='Café'
                    isReversed={true}
                    imgUrl={cafe}
                    infoBoxText="Varva ner efter träningen med en kopp kaffe och en god smörgås i vårt café. Vi har även glass och annat gott fika."
                    />
                    <InfoBox 
                    title='Andra tjänster'
                    isReversed={false}
                    imgUrl={pingpong}
                    infoBoxText="Vi har ett pingisrum med ett bord att hyra. Omklädningsrum med duschar och bastu finns i lokalerna."
                    />
                </section>
            <Footer />
            </section>
        </section>
     );
}

export default About;