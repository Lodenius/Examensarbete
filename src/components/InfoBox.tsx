import '../styles/InfoBox.scss';

type InfoBoxProps = {
    infoBoxText: string;
    imgUrl: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ infoBoxText, imgUrl }) => {
    return ( 
        <article className='InfoBox'>
            <section className='InfoBox__img'>
                <img src={imgUrl} alt="" />
            </section>
            <section className='InfoBox__text'>
                <p>{infoBoxText}</p>
            </section>
        </article>
     );
}

export default InfoBox;
