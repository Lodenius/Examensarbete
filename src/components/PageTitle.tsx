import '../styles/PageTitle.scss';

type PageTitleProps = {
    PageTitle: string;
}


const PageTitle: React.FC<PageTitleProps> = ({ PageTitle }) => {
    return ( 
        <section className='page-title'>
            <h1 className='page-title__title'>{PageTitle}</h1>
            <div className='page-title__underline'></div>
        </section>
     );
}

export default PageTitle;