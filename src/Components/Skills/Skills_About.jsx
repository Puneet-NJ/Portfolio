import "./skills.scss";
import { motion, useInView } from "framer-motion";

const variants = {
	initial: {
		x: -500,
		y: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Skills_About = () => {
	return (
		<motion.div
			className="container"
			variants={variants}
			initial="initial"
			whileInView="animate"
		>
			<div className="about">
				<h1>About me</h1>
				<p>
					I am a final year student pursuing B.E. in Information Science from
					PDA College of Engineering. I am currently into Full-stack web
					development(MERN). My favorite part of programming is that it makes
					feel excited and also problem-solving aspect. I love the feeling of
					finally getting that red squibbly line out of the way. My core stack
					is MongoDB, Express, React, NodeJS Tailwind, State management(Redux &
					Recoil), Java (DSA). I am always looking to learn new technologies. I
					am currently looking for a full-time position or internship as a
					software developer.
				</p>
				<br />
				{/* <p className="italic">
					When I'm not coding or reading docuentations, I enjoy working out,
					expanding my knowledge on various topics, and also meeting new people
					and hearing interesting thoughts. I also enjoy learning new things.In
					general, I am currently learning about world affairs and keeping up
					with new happenings.
				</p> */}
			</div>
			<div className="skills">
				<h1>Skills</h1>
				<ul>
					<li>MongoDB</li>
					<li>Express</li>
					<li>React</li>
					<li>NodeJS</li>
					<li>Mongoose</li>
					<li>Zod</li>
					<li>Recoil</li>
					<li>Redux Toolkit</li>
					<li>Java</li>
					<li>Tailwind</li>
					<li>Jest</li>
					<li>JavaScript</li>
					<li>Firebase</li>
					<li>Git</li>
					<li>Formik</li>
					<li>Yup</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
			</div>
		</motion.div>
	);
};

export default Skills_About;
