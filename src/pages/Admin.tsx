import '../styles/Admin.scss';
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import BookingList from '../components/BookingList';

function Admin() {
    return ( 
        <section className='admin-page'>
            <Header />
            <PageTitle 
            PageTitle="Bokningar"/>
            <section className='admin-page__bookings'>
                <BookingList />
            </section>
            <Footer />
        </section>
     );
}

export default Admin;