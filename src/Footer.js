import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faLinkedin, faGithub, faYoutube, faGoogle } from "@fortawesome/free-brands-svg-icons";

const handleMailClick = () => {
    window.prompt('Ctrl+C to copy to the clipboard:', 'milikkarty@gmail.com');
};

const Footer = () => {

    const contacts = [
        {
            href: "https://t.me/capturedamericanspy",
            className: "icon telegram",
            name: "Telegram",
            icon: faTelegram
        },
        {
            href: "https://www.linkedin.com/in/klymenko/",
            className: "icon linkedin",
            name: "LinkedIn",
            icon: faLinkedin
        },
        {
            href: "https://github.com/milikkarty",
            className: "icon github",
            name: "Github",
            icon: faGithub
        },
        {
            href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
            className: "icon youtube",
            name: "Youtube",
            icon: faYoutube
        }
    ]

    return (
        <section>
            <h1>Contact me</h1>
            <div className="wrapper">
                { contacts.map(contact => (
                    <a href={contact.href} className={contact.className} target="_blank" rel="noreferrer">
                        <span className="tooltip">{contact.name}</span>
                        <span><FontAwesomeIcon icon={contact.icon} /></span>
                    </a>
                ))}
                <div className="icon email" id="copyEmail" onClick={handleMailClick}>
                    <span className="tooltip">Email</span>
                    <span><FontAwesomeIcon icon={faGoogle} /></span>
                </div>
            </div>
        </section>
    )
}

export default Footer;