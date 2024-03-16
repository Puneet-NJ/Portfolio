import "./projects.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import foodalix from "../../images/Projects/foodalix.png";
import netflixGPT from "../../images/Projects/netflix-gpt.png";
import hiveDeal from "../../images/Projects/hiveDeal.png";

const items = [
	{
		id: 1,
		title: "Foodalix",
		img: foodalix,
		desc: "A Dynamic food ordering app which takes live Swiggy API and displays the restaurants and also there respective menus through which the user can add items into the cart and order food.",
		github: "https://github.com/Puneet-NJ/food-oredering-app",
		live: "https://foodalix-002.netlify.app/",
	},
	{
		id: 2,
		title: "HiveDeal",
		img: hiveDeal,
		desc: "An e-commerce website which was built in collabration, has a admin dashboard along with user side functionalities through which one can add and remove items, view customers and many other funtionalities both on admin and user-side",
		github: "https://github.com/Puneet-NJ/HiveDeal",
		live: "https://e-comm-fe.vercel.app/",
	},
	{
		id: 3,
		title: "NetflixGPT",
		img: netflixGPT,
		desc: "A near look alike of Netflix with movie banners taken from TMDB's API and also has Auth done using Firebase. This also has been integrated with OpenAI's GPT API to recommend users some movie based on the prompt. And, is also Responsive.",
		github: "https://github.com/Puneet-NJ/Netflix-GPT",
		live: "https://netlfix-gpt.netlify.app/",
	},
];

const Single = ({ item }) => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
	});

	const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

	return (
		<section>
			<div className="container">
				<div className="wrapper">
					<div className="imageContainer" ref={ref}>
						<a href={item.live} target="_blank" rel="noopener noreferrer">
							<img src={item.img} alt="" />
						</a>
					</div>
					<motion.div className="textContainer" style={{ y }}>
						<a href={item.live} target="_blank" rel="noopener noreferrer">
							<motion.h2>{item.title}</motion.h2>
						</a>
						<p>{item.desc}</p>
						<a href={item.github} target="_blank" rel="noopener noreferrer">
							<button>Github link</button>
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
const Projects = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});

	return (
		<div className="projects">
			<div className="progress">
				<h1>Featured Works</h1>
				<motion.div style={{ scaleX }} className="progressBar"></motion.div>
			</div>
			{items.map((item) => (
				<Single item={item} key={item.id} />
			))}
		</div>
	);
};

export default Projects;
