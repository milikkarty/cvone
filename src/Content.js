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
            id: 1,
            href: "https://milikkarty.github.io/passingthoughts",
            text: "Passing thoughts"
        },
        {
            id: 2,
            href: "https://morning-earth-58287.herokuapp.com/",
            text: "Blog"
        },
        {
            id: 3,
            href: "https://milikkarty.github.io/lightbulb/",
            text: "Lightbulb"
        },
        {
            id: 4,
            href: "https://milikkarty.github.io/snake/",
            text: "Snake"
        }
    ];

    return (
        <section>
            <h1>My projects</h1>
            <div className="project-container">
                { projects.map(project => (
                    <a href={project.href} className="project-item" target="_blank" rel="noreferrer" key={project.id}>{project.text}</a>
                )) }
            </div>
        </section>
    )
}

const Skills = () => {

    const skills = [
        {
            title: "Web-development",
            text: "I have finished a bunch of courses on HTML, CSS, JS, and React. I also know how to work with Git and Github and how to start a server with NodeJS and Express."
        },
        {
            title: "Technical communication",
            text: "I participated in the Technical Communication Fundamentals course by SoftServe where I got to know what SDLC, DDLC, Agile, Scrum, and Kanban are, and how to write user documentation."
        },
        {
            title: "Translation",
            text: "I have a Bachelor's degree in German-Ukrainian and English-Ukrainian translation. Hence I have a four-year non-commercial experience in written translation from these languages."
        }
    ]

    return (
        <section>
            <h1>My skills</h1>
            <div id="skills">
                { skills.map(skill => (
                    <article className="skill-row">
                        <h2>{skill.title}</h2>
                        <p>{skill.text}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

const Academic = () => {

    const academics = [
        {
            degree: "Master's degree",
            university: "Taras Shevchenko National University of Kyiv, Institute of Philology (2021-2023)",
            specialty: "— Foreign literature and the English language: theory and methodology of teaching"
        },
        {
            degree: "Bachelor's degree",
            university: "Taras Shevchenko National University of Kyiv, Institute of Philology (2017-2021)",
            specialty: "— German-Ukrainian and English-Ukrainian translation"
        }
    ]

    return (
        <section>
            <h1>Academic history</h1>
            { academics.map(academic => (
                <article className="academic-row">
                    <h2>{academic.degree}</h2>
                    <p>{academic.university}</p>
                    <p>{academic.specialty}</p>
                </article>
            ))}
        </section>
    )
}

export default Content;