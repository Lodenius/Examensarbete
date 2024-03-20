import '../styles/InfoBox.scss';

type InfoBoxProps = {
    title: string;
    infoBoxText: string;
    imgUrl: string;
    isReversed: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, infoBoxText, imgUrl, isReversed }) => {
    return ( 
        <article className='InfoBox'>
            {isReversed ? (
                <>
                    <section className='InfoBox__img'>
                        <img src={imgUrl} alt="" />
                    </section>
                    <section className='InfoBox__text'>
                        <h3>{title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: infoBoxText }} />
                    </section>
                </>
            ) : (
                <>
                    <section className='InfoBox__text'>
                        <h3>{title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: infoBoxText }} />
                    </section>
                    <section className='InfoBox__img'>
                        <img src={imgUrl} alt="" />
                    </section>
                </>
            )}
        </article>
     );
}

export default InfoBox;

