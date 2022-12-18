// import { useState } from 'react';
import './PageProduct.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

let navigationList = [
  {
    text: 'Электроника',
    link: '/link1.html',
  },
  {
    text: 'Смартфоны и гаджеты',
    link: '/link2.html',
  },
  {
    text: 'Мобильные телефоны',
    link: '/link3.html'
  },
  {
    text: 'Apple',
    link: '/link4.html'
  },
];

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

function PageBlue() {

  // const [ActiveButton, setActiveButton] = useState(+localStorage.getItem('sidebarButtonChoise'));
  // localStorage.setItem('sidebarButtonChoise', ActiveButton);
  // const handleClickButton = () => setActiveButton((prevCount) => 1 - prevCount);

  // const [ActiveLike, setActiveLike] = useState(+localStorage.getItem('sidebarLikeChoise'));
  // localStorage.setItem('sidebarLikeChoise', ActiveLike);
  // const handleClickLike = () => setActiveLike((prevCount) => 1 - prevCount);

  return (
    <div>
      <Header
        // ActiveButton={ActiveButton}
        // ActiveLike={ActiveLike}
      />
      <div className="container-margin-auto">
        <div className="container-margin">
          <Navigation list={navigationList} />
          <Main
            // handleClickButton={handleClickButton}
            // ActiveButton={ActiveButton}
            // handleClickLike={handleClickLike}
            // ActiveLike={ActiveLike}
          />
        </div>
      </div>
      <Footer item={footeritems} />
    </div>
  );
}

export default PageBlue;
