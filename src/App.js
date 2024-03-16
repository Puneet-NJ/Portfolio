import "./app.scss";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Parallax from "./Components/Parallax/Parallax";
import Skills_About from "./Components/Skills/Skills_About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";

function App() {
	return (
		<div className="">
			<Cursor />
			<section id="Homepage">
				<NavBar />
				<Hero />
			</section>
			<section id="Skills">
				<Parallax type="skills" />
			</section>
			<section>
				<Skills_About />
			</section>
			<section id="Projects">
				<Parallax type="projects" />
			</section>
			<Projects />
			<section id="Contact">
				<Contact />
			</section>
		</div>
	);
}

export default App;
