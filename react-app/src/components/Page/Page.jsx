import './Page.css';
import Header from '../Header/Header';
import PageContent from '../PageContent/PageContent';
import Footer from '../Footer/Footer';



let footeritems = {
    tel: {
        text: '+7 900 000 0000',
        link: 'tel:79000000000',
    },
    mail: {
        text: 'partner@mymarket.com',
        link: 'mailto:partner@mymarket.com',
    },
    top: {
        text: 'Наверх',
        link: '#Top',
    },
};

function Page() {

    // const [ActiveButton] = useState(+localStorage.getItem('sidebarButtonChoise'));
    // localStorage.setItem('sidebarButtonChoise', ActiveButton);

    // const [ActiveLike] = useState(+localStorage.getItem('sidebarLikeChoise'));
    // localStorage.setItem('sidebarLikeChoise', ActiveLike);

    return (
        <div>

            <Header
                // ActiveButton={ActiveButton}
                // ActiveLike={ActiveLike}
            />
            <div className="container-margin-auto">
                <div className="container-margin">
                    <PageContent />
                </div>
            </div>
            <Footer item={footeritems} />
        </div>
    );
}

export default Page;
