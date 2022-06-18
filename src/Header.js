import profilePic from './Mykyta.png';
import { useState } from 'react';

const Header = () => {

    const [joke, setJoke] = useState('Don\'t click me');

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Dark');
            const data = await response.json();
            const oneLine = data.joke;
            const twoLine = `${data.setup}\n\n${data.delivery}`;
            setJoke(oneLine || twoLine);
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <header>
            <div className='joke-box'>
                <p className='joke' onClick={fetchJoke}>{joke}</p>
            </div>
            <img className="profile-pic" src={ profilePic } alt="Me"/>
            <h1>Hello</h1>
            <p className="intro">My name is Mykyta Klymenko. Currently, I am getting my Master's degree in methodology of teaching foreign literature and the English language, and learning web-development at leisure. On this page, you can take a glance at the projects I made either as a part of a course or myself, learn about my experience, and contact me if you like.</p>
        </header>
    )
}

export default Header;