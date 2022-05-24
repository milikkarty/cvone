import profilePic from './Mykyta.png';

const Header = () => {
    return (
        <header>
            <img className="profile-pic" src={ profilePic } alt="Me"/>
            <h1>Hello</h1>
            <p className="intro">My name is Mykyta Klymenko. Currently, I am getting my Master's degree in methodology of teaching foreign literature and the English language, and learning web-development at leisure. On this page, you can take a glance at the projects I made either as a part of a course or myself, learn about my experience and contact me if you'd like.</p>
        </header>
    )
}

export default Header;