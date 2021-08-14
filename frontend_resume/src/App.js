import About from './components/about'
import Experiences from './components/experiences'
import Education from './components/education'
import Skills from './components/skills'
import Interests from './components/interests'
import Awards from './components/awards'
import Nav from './components/nav'
import Projects from './components/projects'

function App() {
    return (
        <div>
            <Nav />
            <div className="container-fluid p-0">
                <About />
                <Experiences />
                <Projects />
                <Awards />
                <Skills />
                <Education />
                <Interests />
            </div>
        </div>
    );
}

export default App;
