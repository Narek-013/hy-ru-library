import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer__info">
          <h2>Словарь</h2>
          <p>
            Если вы заинтересованы в улучшении вашего языкового словаря или в приобретении новых словарей, на нашем сайте вы можете скачать
            словари на различных языках, включая армянский, русский и другие. Легко найдите необходимые словари и расширьте свои знания.
          </p>
          <p>Скачайте сейчас, чтобы получить доступ к более широкому выбору словарей на разных языках.</p>
        </div>
        <div className="footer__content">
          <Link to="/languages/hy">Hy</Link>
          <Link to="/languages/ru">Ru</Link>
          <Link to="/languages/en">En</Link>
          <Link to="/languages/zh">Zh</Link>
          <Link to="/languages/eu">Eu</Link>
          <Link to="/languages/ar">Ar</Link>
          <Link to="/languages/fr">Fr</Link>
          <Link to="/languages/mk">Mk</Link>
          <Link to="/languages/uk">uk</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
