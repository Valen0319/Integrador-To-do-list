import './Footer.css';

export default function Footer() {
    return (
    <footer className="footer footer--bg-accent footer--text-main">
      <div className="footer__links">
        © 2025 Valentin & Lautaro |
        <a href="mailto:valentinarroyo251122@gmail.com" className="footer__link"
          >valentinarroyo251122@gmail.com</a>
        <a href="mailto:lauty9698@gmail.com" className="footer__link"
          >lauty9698@gmail.com</a>
        |
        <a
          href="https://instagram.com/aa.valxn"
          target="_blank"
          className="footer__link"
          >IG: @aa.valxn</a>
        <a
          href="https://instagram.com/lautiezequiell"
          target="_blank"
          className="footer__link"
          >IG: lautiezequiell</a>
      </div>
    </footer>
    );
}