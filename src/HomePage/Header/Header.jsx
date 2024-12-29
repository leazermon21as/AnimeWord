import './Header.css';
import { Link } from 'react-router-dom';  // Используем Link для навигации

export default function Header() {
  return (
    <>
      <header>
        <div className="menu">
          <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
          <label htmlFor="burger-checkbox" className="burger"></label>
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/">Главная</Link>
            </li>
            <li className="menu-item">
              <Link to="/libary">Библиотека</Link>
            </li>
            <li className="menu-item">
              <Link to="/about">О нас</Link> {/* При нажатии на это будет переход на About */}
            </li>
            <li className="menu-item">
              <Link to="/list">Список</Link>
            </li>
          </ul>
        </div>
        <div className="inp">
          <input type="text" placeholder="Search..." className="header__input" />
          <div className="search"></div>
        </div>
      </header>
    </>
  );
}
