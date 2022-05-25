import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faLinkedin, faGithub, faYoutube, faGoogle } from "@fortawesome/free-brands-svg-icons";

const handleMailClick = () => {
    window.prompt('Ctrl+C to copy to the clipboard:', 'milikkarty@gmail.com');
};

const Footer = () => {
  return (
    <section>
        <h1>Contact me</h1>
        <div className="wrapper">
            <a href="https://t.me/capturedamericanspy" className="icon telegram" target="_blank" rel="noreferrer">
                <span className="tooltip">Telegram</span>
                <span><FontAwesomeIcon icon={faTelegram} /></span>
            </a>
            <a href="https://www.linkedin.com/in/klymenko/" className="icon linkedin" target="_blank" rel="noreferrer">
                <span className="tooltip">LinkedIn</span>
                <span><FontAwesomeIcon icon={faLinkedin} /></span>
            </a>
            <a href="https://github.com/milikkarty" className="icon github" target="_blank" rel="noreferrer">
                <span className="tooltip">Github</span>
                <span><FontAwesomeIcon icon={faGithub} /></span>
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="icon youtube" target="_blank" rel="noreferrer">
                <span className="tooltip">Youtube</span>
                <span><FontAwesomeIcon icon={faYoutube} /></span>
            </a>
            <div className="icon email" id="copyEmail" onClick={handleMailClick}>
                <span className="tooltip">Email</span>
                <span><FontAwesomeIcon icon={faGoogle} /></span>
            </div>
        </div>
    </section>
  )
}

export default Footer;