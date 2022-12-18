import { Link } from 'react-router-dom';
import styles from './PageContent.module.css';


function PageContent() {

  return (
    <div className={styles.pageContent}>
      <div> Здесь должно быть содержимое главной страницы </div>
      <div>
        <Link className={styles.link} to="/pageProduct">Перейти на страницу товара</Link>
      </div>
    </div>
  );
}

export default PageContent;