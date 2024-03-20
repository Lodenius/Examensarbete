import CalendarView from "../components/CalendarView";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";

function Booking() {
    return ( 
        <section>
                <Header />
                <PageTitle 
                PageTitle="Boka tid"/>
            <section>
                <CalendarView />
            </section>
            <Footer />
        </section>
    );
}

export default Booking;

