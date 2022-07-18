const Content = () => {
    return (
        <main>
            <hr />
            <Projects />
            <hr />
            <Skills />
            <hr />
            <Academic />
            <hr />
        </main>
    )
}

const Projects = () => {

    const projects = [
        {
            href: "https://milikkarty.github.io/passingthoughts",
            text: "Passing thoughts"
        },
        {
            href: "https://morning-earth-58287.herokuapp.com/",
            text: "Blog"
        },
        {
            href: "https://milikkarty.github.io/lightbulb/",
            text: "Lightbulb"
        },
        {
            href: "https://milikkarty.github.io/snake/",
            text: "Snake"
        }
    ];

    return (
        <section>
            <h1>My projects</h1>
            <div className="project-container">
                { projects.map(project => (
                    <a href={project.href} className="project-item" target="_blank" rel="noreferrer">{project.text}</a>
                )) }
            </div>
        </section>
    )
}

const Skills = () => {
    return (
        <section>
            <h1>My skills</h1>
            <div id="skills">
                <article className="skill-row">
                    <h2>Web-development</h2>
                    <p>I have finished a bunch of courses on HTML, CSS, JS, and React. I also know how to work with Git and Github and how to start a server with NodeJS and Express.</p>
                </article>
                <article className="skill-row">
                    <h2>Technical communication</h2>
                    <p>I participated in the Technical Communication Fundamentals course by SoftServe where I got to know what SDLC, DDLC, Agile, Scrum, and Kanban are, and how to write user documentation.</p>
                </article>
                <article className="skill-row">
                    <h2>Translation</h2>
                    <p>I have a Bachelor's degree in German-Ukrainian and English-Ukrainian translation. Hence I have a four-year non-commercial experience in written translation from these languages.</p>
                </article>
            </div>
        </section>
    )
}

const Academic = () => {
    return (
        <section>
            <h1>Academic history</h1>
            <article className="academic-row">
                <h2>Master's degree</h2>
                <p>Taras Shevchenko National University of Kyiv, Institute of Philology (2021-2023)</p>
                <p>— Foreign literature and the English language: Theory and methodology of teaching</p>
            </article>
            <article className="academic-row">
                <h2>Bachelor's degree</h2>
                <p>Taras Shevchenko National University of Kyiv, Institute of Philology (2017-2021)</p>
                <p>— German-Ukrainian and English-Ukrainian translation</p>
            </article>
        </section>
    )
}

export default Content;