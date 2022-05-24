const Footer = () => {
  return (
    <section>
        <h1>Contact me</h1>
        <div className="wrapper">
            <a href="https://t.me/capturedamericanspy" className="icon telegram" target="_blank" rel="noreferrer">
                <span className="tooltip">Telegram</span>
                <span><i className="fab fa-telegram"></i></span>
            </a>
            <a href="https://www.linkedin.com/in/klymenko/" className="icon linkedin" target="_blank" rel="noreferrer">
                <span className="tooltip">LinkedIn</span>
                <span><i className="fab fa-linkedin-in"></i></span>
            </a>
            <a href="https://github.com/milikkarty" className="icon github" target="_blank" rel="noreferrer">
                <span className="tooltip">Github</span>
                <span><i className="fab fa-github-square"></i></span>
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className="icon youtube" target="_blank" rel="noreferrer">
                <span className="tooltip">Youtube</span>
                <span><i className="fab fa-youtube"></i></span>
            </a>
            <div className="icon email" id="copyEmail">
                <span className="tooltip">Email</span>
                <span><i className="fas fa-envelope"></i></span>
            </div>
        </div>
    </section>
  )
}

export default Footer;