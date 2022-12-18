import { useCurrentDate } from "@kundinos/react-hooks";
import './Footer.css';
import Link from '../Link/Link';

function Footer(props) {

    const currentDate = useCurrentDate();
    const fullYear = currentDate.getFullYear();
    let { item } = props;
    return (
        <div>
            <footer className="footer-background">
                <div className="footer-margin">

                    <div className="footer">
                        <div className="footer__text">
                            <strong>© ООО «<span className="heading__text_color">Мой</span>Маркет», 2018-{fullYear}</strong><br />

                            <div className="footer-item">
                                Для уточнения информации звоните по номеру<br/> <Link text={item.tel.text} link={item.tel.link} />,
                            </div>
                           
                            <div className="footer-item">
                                {' '}а предложения по сотрудничеству отправляйте на почту <Link text={item.mail.text} link={item.mail.link} />
                            </div>

                        </div>
                        <div className="footer__link">

                            <div className="footer-link-up">
                                <a className="link-top"href="#Top">Наверх</a><br />
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;


