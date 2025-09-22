import {link} from 'react-router-dom';
import "../styles/styles.css"

function Footer() {
  return (
    <footer class="footer footer--bg-accent footer--text-main">
      <div class="footer__links">
        © 2025 Valentin & Lautaro |
        <a 
          href="mailto:valentinarroyo251122@gmail.com" 
          class="footer__link"
          >valentinarroyo251122@gmail.com</a>
        <a 
          href="mailto:lauty9698@gmail.com" 
          class="footer__link"
          >lauty9698@gmail.com</a>|
        <a
          href="https://instagram.com/aa.valxn"
          target="_blank"
          class="footer__link"
          >IG: @aa.valxn</a>
        <a
          href="https://instagram.com/lautiezequiell"
          target="_blank"
          class="footer__link"
          >IG: lautiezequiell</a>
      </div>
    </footer>
    );
}
export default Footer;