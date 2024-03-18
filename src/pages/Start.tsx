import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from "../components/Header";
import Footer from '../components/Footer';
import '../styles/Start.scss';
import InfoBox from '../components/InfoBox';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import { Autoplay } from 'swiper/modules';

// imgs & icons
import slide1 from '../assets/imgs/Blue1.png';
import slide2 from '../assets/imgs/Black1.png';
import slide3 from '../assets/imgs/Blue2.png';
import slide4 from '../assets/imgs/Black2.png';
import slide5 from '../assets/imgs/Blue3.png';
import slide6 from '../assets/imgs/Black3.png';
import slide7 from '../assets/imgs/Blue4.png';
import slide8 from '../assets/imgs/Black4.png';
import slide9 from '../assets/imgs/Blue5.png';
import slide10 from '../assets/imgs/Black5.png';
import slide11 from '../assets/imgs/Blue6.png';

import shuttlecock from '../assets/icons/Motion-blue.svg';
import infoBoxImg from '../assets/imgs/smallBlack.png';



function StartPage() {
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();

    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [ref4, inView4] = useInView();

    if (inView1) {
        controls1.start({ x: 0 });
    }
    if (inView2) {
        controls2.start({ x: 0 });
    }
    if (inView3) {
        controls3.start({ x: 0 });
    }
    if (inView4) {
        controls4.start({ x: 0 });
    }

    return ( 
        <section>
                <Header />
            <section className="hero">
                <h1>Välkommen till Stockholm Badmintion</h1>
                <h2>Bästa badmintonhallen finns på Södermalm.</h2>
            </section>
            <section className="slides">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={600}
                    autoplay={{delay: 3000,
                        disableOnInteraction: false,}}
                    modules={[Autoplay]}
                    initialSlide={1}
                    className="mySlides">
                    <SwiperSlide>
                        <img src={slide1} alt="shuttnet" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={slide2} alt="shuttnet" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={slide3} alt="shuttnet" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={slide4} alt="shuttnet" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={slide5} alt="shuttnet" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={slide6} alt="shuttnet" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={slide7} alt="shuttnet" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={slide8} alt="shuttnet" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={slide9} alt="shuttnet" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={slide10} alt="shuttnet" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={slide11} alt="shuttnet" />
                    </SwiperSlide>
                </Swiper>
            </section>
            <main className="start-info">
                <article ref={ref1}>
                    <h3>
                        <motion.img
                            src={shuttlecock}
                            alt="Shuttlecock icon"
                            animate={controls1}
                            initial={{ x: -1700 }}
                            transition={{ duration: 0.4 }}
                        />
                        &nbsp;Badmintonstadion
                    </h3>
                    <p>
                        Är du intresserad av att spela badminton i Stockholm? Vi är ledande inom badminton och erbjuder möjligheten att boka spel i stockholms största hall
                        med 40 stycken banor från tidigt på morgonen till sent på kvällen. Vårt mål är att erbjuda dig den bästa badmintonupplevelsen i Stockholm. 
                        Vi har högkvalitativa badmintonbanor, certifierade tränare, seriespel, möjligheter till socialt spel, välsorterad butik, kafé och mycket mer.
                    </p>
                </article>
                <article ref={ref2}>
                    <h3>
                        <motion.img
                            src={shuttlecock}
                            alt="Shuttlecock icon"
                            animate={controls2}
                            initial={{ x: -1700 }}
                            transition={{ duration: 0.6 }}
                        />
                        &nbsp;Badmintonträning i Stockholm
                    </h3>
                    <p>
                        Är du redo att ta ditt badmintonspel till nästa nivå? På vår anläggning erbjuder vi skräddarsydd badmintonträning och kurser i 
                        hjärtat av Stockholm. Oavsett om du är en nybörjare som vill lära dig grunderna eller en erfaren spelare som vill finslipa din 
                        teknik, har vi något för dig. Våra tränare är dedikerade att hjälpa dig nå dina mål. Du kan välja mellan personlig träning med en 
                        erfaren tränare som fokuserar på dina individuella behov, intensiva kurser som ger en fördjupad förståelse för spelet, eller olika 
                        typer av matchspel där du kan tillämpa dina nyvunna färdigheter i en tävlingsmiljö. Vi erbjuder även teknikträning för att förbättra 
                        din skicklighet och precision på banan. Oavsett din nuvarande nivå eller målsättning, är vårt mål att hjälpa dig nå dina fulla potential som badmintonspelare.
                    </p>
                </article>
                <article ref={ref3}>
                    <h3>
                        <motion.img
                            src={shuttlecock}
                            alt="Shuttlecock icon"
                            animate={controls3}
                            initial={{ x: -1700 }}
                            transition={{ duration: 0.8 }}
                        />
                        &nbsp;Seriespel i Stockholmsområdet
                    </h3>
                    <p>
                        Är du redo för en spännande utmaning på banan? Delta i vårt omtyckta seriespel och upplev den spänning och gemenskap som bara tävling kan erbjuda. Vi är stolta 
                        över att erbjuda Stockholms bästa seriespel, öppet för spelare på alla nivåer. Oavsett om du är nybörjare eller en erfaren tävlingsmänniska, finns det en plats 
                        för dig i vårt seriespel. Vår strukturerade serie ger dig möjlighet att tävla mot andra spelare i en omgivning som främjar utveckling och vänskap. 
                        Kom och var med och upplev den spännande världen av badmintonserier i Stockholm!
                    </p>
                </article>
                <article ref={ref4}>
                    <h3>
                        <motion.img
                            src={shuttlecock}
                            alt="Shuttlecock icon"
                            animate={controls4}
                            initial={{ x: -1700 }}
                            transition={{ duration: 1 }}
                        />
                        &nbsp;Badminton för barn & ungdom
                    </h3>
                    <p>
                        Våra samarbetspartners strävar efter att erbjuda barn och ungdomar bästa möjliga utvecklingsmöjligheter inom badminton, oavsett deras förmåga och intresse. 
                        Dessutom välkomnar vi skolklasser för träning hos oss. Det är en utmärkt möjlighet för skolor att främja motion och samarbete bland eleverna samtidigt 
                        som de har kul och lär sig nya färdigheter.
                    </p>
                </article>
                        <div></div>
                <InfoBox 
                imgUrl={infoBoxImg}
                infoBoxText=''/>
            </main>
            <Footer />
        </section>
     );
}

export default StartPage;
