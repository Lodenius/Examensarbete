import CalendarView from "../components/CalendarView";
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
        </section>
    );
}

export default Booking;

