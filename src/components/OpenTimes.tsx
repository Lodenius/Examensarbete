import '../styles/OpenTimes.scss';

function OpenTimes() {
    return ( 
        <section className='times'>
            <h2>Våra öppettider</h2>
            <ul>
                <li><strong>Måndag till onsdag:</strong> 08:00 - 23:00</li>
                <li><strong>Torsdag:</strong> 06:00 - 23:00</li>
                <li><strong>Fredag:</strong> 08:00 - 19:30</li>
                <li><strong>Lördag:</strong> 09:00 - 17:00</li>
                <li><strong>Söndag:</strong> 09:00 - 20:30</li>
            </ul>
        </section>
     );
}

export default OpenTimes;