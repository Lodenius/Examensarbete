// import Header from "../components/Header";
// import PageTitle from "../components/PageTitle";
// import Footer from "../components/Footer";
// import '../styles/Events.scss';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/scss';
// import { Autoplay } from 'swiper/modules';

// // imgs & icons
// import outside1 from '../assets/imgs/Green1.png';
// import outside2 from '../assets/imgs/Green2.png';
// import outside3 from '../assets/imgs/Green3.png';
// import outside4 from '../assets/imgs/Green4.png';
// import outside5 from '../assets/imgs/Green5.png';
// import outside6 from '../assets/imgs/Green7.png';
// import colorpop1 from '../assets/imgs/Color1.png';
// import colorpop2 from '../assets/imgs/Color2.png';
// import colorpop3 from '../assets/imgs/Color3.png';
// import colorpop4 from '../assets/imgs/Color4.png';
// import colorpop5 from '../assets/imgs/Color5.png';

// import shuttlecock from '../assets/icons/Motion-blue.svg';

// function Events() {
//     const controls1 = useAnimation();
//     const controls2 = useAnimation();


//     const [ref1, inView1] = useInView();
//     const [ref2, inView2] = useInView();


//     if (inView1) {
//         controls1.start({ x: 0 });
//     }
//     if (inView2) {
//         controls2.start({ x: 0 });
//     }

//     return ( 
//         <section>
//                 <Header />
//                 <PageTitle 
//                 PageTitle="Tidigare event på Stockholm Badminton"/>
//             <section className="events">
//                 <article ref={ref1}>
//                     <h2 className="events__h2">
//                         <motion.img
//                             src={shuttlecock}
//                             alt="Shuttlecock icon"
//                             animate={controls1}
//                             initial={{ x: -1700 }}
//                             transition={{ duration: 0.4 }}
//                         />
//                         &nbsp;Outside play
//                     </h2>
                    // <p>
                    //     Den soliga dagen hälsade badmintonentusiaster från när och fjärran välkomna till det efterlängtade utomhuseventet för badminton. Det var en dag fylld av sprakande energi 
                    //     och glädje när spelare av alla åldrar och färdighetsnivåer samlades under det öppna himmelrummet för att delta i spännande matcher och gemenskap.
                    //     På de omvandlade tennisbanorna, omringade av grönska och den milda brisen, visade deltagarna upp sina färdigheter och tävlade med iver och passion. Vare sig 
                    //     det var nybörjare som lärde sig grunderna eller erfarna spelare som utmanade sig själva, var stämningen elektrisk och fylld av spänning.
                    //     Familjer och vänner samlades runt banorna för att heja på sina favoritspelare och njuta av den avslappnade atmosfären. Medan tävlingen pågick, erbjöd eventet också 
                    //     olika aktiviteter och workshops där deltagarna kunde förbättra sina färdigheter och fördjupa sin kärlek till sporten.
                    //     Matstånden erbjöd läckra läckerheter och livemusik fyllde luften med glädje och energi. Det var en fest för badmintonkulturen där varje serve och varje poäng firades som en triumf.
                    //     Dagen var en otrolig upplevelse för alla som deltog och lämnade minnen som kommer att bäras med sig långt efter att solen hade gått ner över det öppna himmelrummet för badminton.
                    // </p>
//                 </article>
//                 <section className="slides">
//                 <Swiper
//                     slidesPerView={4}
//                     spaceBetween={600}
//                     autoplay={{delay: 3000,
//                         disableOnInteraction: false,}}
//                     modules={[Autoplay]}
//                     initialSlide={1}
//                     className="mySlides">
//                     <SwiperSlide>
//                         <img src={outside1} alt="shuttnet" />
//                     </SwiperSlide>
//                     <SwiperSlide >
//                         <img src={outside2} alt="shuttnet" />
//                     </SwiperSlide>
//                     <SwiperSlide >
//                         <img src={outside3} alt="shuttnet" />
//                     </SwiperSlide>
//                     <SwiperSlide >
//                         <img src={outside4} alt="shuttnet" />
//                     </SwiperSlide>
//                     <SwiperSlide >
//                         <img src={outside5} alt="shuttnet" />
//                     </SwiperSlide>
//                     <SwiperSlide >
//                         <img src={outside6} alt="shuttnet" />
//                     </SwiperSlide>
//                 </Swiper>
//                 </section>

//             <section>
//                 <article ref={ref2}>
//                     <h2 className="events__h2">
//                         <motion.img
//                             src={shuttlecock}
//                             alt="Shuttlecock icon"
//                             animate={controls2}
//                             initial={{ x: -1700 }}
//                             transition={{ duration: 0.4 }}
//                         />
//                         &nbsp;Color-pop
//                     </h2>
//                     <p>
//                     Det var en dag av färg och fest när badmintonentusiaster samlades för det spektakulära Color-Pop Badmintoneventet. Denna unika tillställning, 
//                     döpt till ära av dess livliga färgtema, erbjöd en uppslukande och färgsprakande upplevelse för alla deltagare.
//                     Vid ankomsten möttes deltagarna av en explosion av färger, med festliga ballongbågar och konfettikanoner som sköt ut ljusa och glada färgsprayer. 
//                     Spelare och åskådare var klädda i lekfulla och livfulla kläder, och banorna var dekorerade med färgglada banderoller och konfetti.
//                     Under hela dagen fylldes luften med glädje och entusiasm när spelarna kastade sig in i spännande matcher och tävlingar. Badmintonbanorna blev 
//                     levande med rörelse och energi när deltagarna svingade sina racketar i en färgstark dans av bollar och slag.
//                     Utöver det traditionella spelet erbjöd Color-Pop eventet också en rad roliga och kreativa aktiviteter. Det fanns en "Färgsprutningsstation" där 
//                     deltagarna kunde måla varandra med färgglada pulver och en "Fotobås" där de kunde fånga sina mest minnesvärda ögonblick i levande färger.
//                     Matstånden erbjöd en smakrik mångfald av rätter och drycker, allt presenterat i färgglada förpackningar och serverat med ett leende. Livemusik och 
//                     dans skapade en festlig atmosfär och höll deltagarna på fötter hela dagen och långt in på natten.
//                     Color-Pop Badmintoneventet var en fullständig succé och lämnade deltagarna med en känsla av eufori och en sammanflätning av färg och glädje. 
//                     Det var en dag att minnas och en hyllning till glädjen och gemenskapen i badmintonsporten.
//                     </p>
//                 </article>
//                 <section className="slides">
//                 <Swiper
//                     slidesPerView={3}
//                     spaceBetween={100}
//                     autoplay={{delay: 3000,
//                         disableOnInteraction: false,}}
//                     modules={[Autoplay]}
//                     initialSlide={1}
//                     className="mySlides">
//                     <SwiperSlide>
//                         <img src={colorpop1} alt="shuttnet" />
//                     </SwiperSlide>
//                     <SwiperSlide >
//                         <img src={colorpop2} alt="shuttnet" />
//                     </SwiperSlide>
//                     <SwiperSlide >
//                         <img src={colorpop3} alt="shuttnet" />
//                     </SwiperSlide>
//                     <SwiperSlide >
//                         <img src={colorpop4} alt="shuttnet" />
//                     </SwiperSlide>
//                     <SwiperSlide >
//                         <img src={colorpop5} alt="shuttnet" />
//                     </SwiperSlide>
//                 </Swiper>
//                 </section>
//             </section>
//             </section>
//             <Footer />
//         </section>
//      );
// }

// export default Events;

import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import '../styles/Events.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import { Autoplay } from 'swiper/modules';

// imgs & icons
import outside1 from '../assets/imgs/Green1.png';
import outside2 from '../assets/imgs/Green2.png';
import outside3 from '../assets/imgs/Green3.png';
import outside4 from '../assets/imgs/Green4.png';
import outside5 from '../assets/imgs/Green5.png';
import outside6 from '../assets/imgs/Green7.png';
import colorpop1 from '../assets/imgs/Color1.png';
import colorpop2 from '../assets/imgs/Color2.png';
import colorpop3 from '../assets/imgs/Color3.png';
import colorpop4 from '../assets/imgs/Color4.png';
import colorpop5 from '../assets/imgs/Color5.png';

import shuttlecock from '../assets/icons/Motion-blue.svg';

function Events() {
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
                PageTitle="Tidigare event på Stockholm Badminton"/>

            <section className="events">

                <section>
                    <article ref={ref1}>
                        <h2 className="events__h2">
                            <motion.img
                                src={shuttlecock}
                                alt="Shuttlecock icon"
                                animate={controls1}
                                initial={{ x: -1700 }}
                                transition={{ duration: 0.4 }}
                            />
                            &nbsp;Outside play
                        </h2>
                        <p>
                            Den soliga dagen hälsade badmintonentusiaster från när och fjärran välkomna till det efterlängtade utomhuseventet för badminton. Det var en dag fylld av sprakande energi 
                            och glädje när spelare av alla åldrar och färdighetsnivåer samlades under det öppna himmelrummet för att delta i spännande matcher och gemenskap.
                            På de omvandlade tennisbanorna, omringade av grönska och den milda brisen, visade deltagarna upp sina färdigheter och tävlade med iver och passion. Vare sig 
                            det var nybörjare som lärde sig grunderna eller erfarna spelare som utmanade sig själva, var stämningen elektrisk och fylld av spänning.
                            Familjer och vänner samlades runt banorna för att heja på sina favoritspelare och njuta av den avslappnade atmosfären. Medan tävlingen pågick, erbjöd eventet också 
                            olika aktiviteter och workshops där deltagarna kunde förbättra sina färdigheter och fördjupa sin kärlek till sporten.
                            Matstånden erbjöd läckra läckerheter och livemusik fyllde luften med glädje och energi. Det var en fest för badmintonkulturen där varje serve och varje poäng firades som en triumf.
                            Dagen var en otrolig upplevelse för alla som deltog och lämnade minnen som kommer att bäras med sig långt efter att solen hade gått ner över det öppna himmelrummet för badminton.
                        </p>
                    </article>
                    <section className="slides">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={350}
                        autoplay={{delay: 3000,
                            disableOnInteraction: false,}}
                        modules={[Autoplay]}
                        initialSlide={1}
                        className="mySlides">
                        <SwiperSlide>
                            <img src={outside1} alt="shuttnet" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={outside2} alt="shuttnet" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={outside3} alt="shuttnet" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={outside4} alt="shuttnet" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={outside5} alt="shuttnet" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={outside6} alt="shuttnet" />
                        </SwiperSlide>
                    </Swiper>
                    </section>
                </section>

                <section>
                    <article ref={ref2}>
                        <h2 className="events__h2">
                            <motion.img
                                src={shuttlecock}
                                alt="Shuttlecock icon"
                                animate={controls2}
                                initial={{ x: -1700 }}
                                transition={{ duration: 0.4 }}
                            />
                            &nbsp;Color-pop
                        </h2>
                        <p>
                        Det var en dag av färg och fest när badmintonentusiaster samlades för det spektakulära Color-Pop Badmintoneventet. Denna unika tillställning, 
                        döpt till ära av dess livliga färgtema, erbjöd en uppslukande och färgsprakande upplevelse för alla deltagare.
                        Vid ankomsten möttes deltagarna av en explosion av färger, med festliga ballongbågar och konfettikanoner som sköt ut ljusa och glada färgsprayer. 
                        Spelare och åskådare var klädda i lekfulla och livfulla kläder, och banorna var dekorerade med färgglada banderoller och konfetti.
                        Under hela dagen fylldes luften med glädje och entusiasm när spelarna kastade sig in i spännande matcher och tävlingar. Badmintonbanorna blev 
                        levande med rörelse och energi när deltagarna svingade sina racketar i en färgstark dans av bollar och slag.
                        Utöver det traditionella spelet erbjöd Color-Pop eventet också en rad roliga och kreativa aktiviteter. Det fanns en "Färgsprutningsstation" där 
                        deltagarna kunde måla varandra med färgglada pulver och en "Fotobås" där de kunde fånga sina mest minnesvärda ögonblick i levande färger.
                        Matstånden erbjöd en smakrik mångfald av rätter och drycker, allt presenterat i färgglada förpackningar och serverat med ett leende. Livemusik och 
                        dans skapade en festlig atmosfär och höll deltagarna på fötter hela dagen och långt in på natten.
                        Color-Pop Badmintoneventet var en fullständig succé och lämnade deltagarna med en känsla av eufori och en sammanflätning av färg och glädje. 
                        Det var en dag att minnas och en hyllning till glädjen och gemenskapen i badmintonsporten.
                        </p>
                    </article>
                    <section className="slides">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={350}
                        autoplay={{delay: 3000,
                            disableOnInteraction: false,}}
                        modules={[Autoplay]}
                        initialSlide={1}
                        className="mySlides">
                        <SwiperSlide>
                            <img src={colorpop1} alt="shuttnet" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={colorpop2} alt="shuttnet" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={colorpop3} alt="shuttnet" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={colorpop4} alt="shuttnet" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={colorpop5} alt="shuttnet" />
                        </SwiperSlide>
                    </Swiper>
                    </section>

                </section>

            </section>
            <Footer />
        </section>
     );
}

export default Events;