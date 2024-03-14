import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from "../components/Header";
import '../styles/Start.scss';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import { Autoplay } from 'swiper/modules';

// imgs
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


function StartPage() {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    if (inView) {
        controls.start({ x: 0 });
    }

    return ( 
        <section>
                <Header />
            <section className="hero">
                <h1>Välkommen till badmintonstadion</h1>
                <h2>Bästa badmintonhallen finns på Södermalm.</h2>
            </section>
            <section className="slides">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={100}
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
                <motion.article
                    ref={ref}
                    animate={controls}
                    initial={{ x: -1500 }}
                    transition={{ duration: 0.2 }}>
                    <h3> Badmintonstadion</h3>
                    <p>Är du intresserad av att spela badminton i Stockholm? Vi är ledande inom badminton och erbjuder möjligheten att boka spel 
                        på något av våra 16 badmintoncenter runt regionen. Vårt mål är att erbjuda dig den bästa badmintonupplevelsen i Stockholm. 
                        Vi har högkvalitativa badmintonbanor, certifierade tränare, seriespel, möjligheter till socialt spel, välsorterade butiker 
                        och mycket mer.</p>
                </motion.article>
                <motion.article
                    ref={ref}
                    animate={controls}
                    initial={{ x: -1500 }}
                    transition={{ duration: 0.6 }}>
                    <h3> Badmintonträning i Stockholm</h3>
                    <p>Är du redo att ta ditt badmintonspel till nästa nivå? På vår anläggning erbjuder vi skräddarsydd badmintonträning och kurser i 
                        hjärtat av Stockholm. Oavsett om du är en nybörjare som vill lära dig grunderna eller en erfaren spelare som vill finslipa din 
                        teknik, har vi något för dig. Våra tränare är dedikerade att hjälpa dig nå dina mål. Du kan välja mellan personlig träning med en 
                        erfaren tränare som fokuserar på dina individuella behov, intensiva kurser som ger en fördjupad förståelse för spelet, eller olika 
                        typer av matchspel där du kan tillämpa dina nyvunna färdigheter i en tävlingsmiljö. Vi erbjuder även teknikträning för att förbättra 
                        din skicklighet och precision på banan. Oavsett din nuvarande nivå eller målsättning, är vårt mål att hjälpa dig nå dina fulla potential som badmintonspelare.</p>
                </motion.article>
                <motion.article
                    ref={ref}
                    animate={controls}
                    initial={{ x: -1500 }}
                    transition={{ duration: 1 }}>
                    <h3> Seriespel i Stockholmsområdet</h3>
                    <p>Är du redo för en spännande utmaning på banan? Delta i vårt omtyckta seriespel och upplev den spänning och gemenskap som bara tävling kan erbjuda. Vi är stolta 
                        över att erbjuda Stockholms bästa seriespel, öppet för spelare på alla nivåer. Oavsett om du är nybörjare eller en erfaren tävlingsmänniska, finns det en plats 
                        för dig i vårt seriespel. Vår strukturerade serie ger dig möjlighet att tävla mot andra spelare i en omgivning som främjar utveckling och vänskap. Dessutom 
                        erbjuder de flesta av våra badmintoncenter i Stockholm möjligheten att delta i detta spännande seriespel. Kom och var med och upplev den spännande världen av badmintonserier i Stockholm!</p>
                </motion.article>
                <motion.article
                    ref={ref}
                    animate={controls}
                    initial={{ x: -1500 }}
                    transition={{ duration: 1.4 }}>
                    <h3> Padel för barn & ungdom</h3>
                    <p>Våra samarbetspartners strävar efter att erbjuda barn och ungdomar bästa möjliga utvecklingsmöjligheter inom badminton, oavsett deras förmåga och intresse. 
                        Dessutom välkomnar vi skolklasser för träning hos oss. Det är en utmärkt möjlighet för skolor att främja motion och samarbete bland eleverna samtidigt 
                        som de har kul och lär sig nya färdigheter.</p>
                </motion.article>
            </main>
        </section>
     );
}

export default StartPage;