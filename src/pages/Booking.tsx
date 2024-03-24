import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import '../styles/Booking.scss';

//img

function Booking() {
    return ( 
        <section className="Booking">
            <Header />
            <PageTitle 
            PageTitle="Boka ditt besök"/>
                <section>
                    <article className="Booking__info">
                        <p>Boka din speltid enkelt och smidigt genom vår online bokningsplattform. 
                           Välj det datum och den tid som passar dig bäst och gör din reservation direkt här 
                           på vår webbplats. Vi erbjuder ett stort urval av tillgängliga tider för att passa 
                           ditt schema perfekt, så att du kan njuta av din badmintonupplevelse när det passar dig bäst.</p>
                    </article>
                    <BookingForm />
                </section>
            <Footer />
        </section>
     );
}

export default Booking;