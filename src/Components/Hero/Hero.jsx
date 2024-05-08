import "./hero.scss";
import { motion } from "framer-motion";
import hero_img from "../../images/hero.png";
import scroll_img from "../../images/scroll.png";
import resume from "./Puneet NJ-FS.pdf";

const textVariants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};
const sliderVariants = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-220%",
		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			duration: 20,
		},
	},
};

const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="textContainer"
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					<motion.h2 variants={textVariants}>PUNEET NJ</motion.h2>
					<a
						href={resume}
						download="Puneet NJ's Resume"
						target="_blank"
						rel="noopener noreferrer"
					>
						<motion.button
							variants={textVariants}
							className="cv"
							onClick={() => {}}
						>
							<b>Download CV</b>
						</motion.button>
					</a>
					<motion.h1 variants={textVariants}>
						Full-stack Developer and tech Enthusiast
					</motion.h1>
					<motion.div variants={textVariants} className="buttons">
						{/* <a href={`#$contact`}>
							<motion.button variants={textVariants}>Contact Me</motion.button>
						</a> */}
					</motion.div>
					<motion.img
						variants={textVariants}
						animate="scrollButton"
						src={scroll_img}
						alt=""
					/>
				</motion.div>
			</div>
			<motion.div
				className="slidingTextContainer"
				variants={sliderVariants}
				initial="initial"
				animate="animate"
			>
				Developer
			</motion.div>
			<div className="imageContainer">
				<img src={hero_img} alt="hero" />
			</div>
		</div>
	);
};

export default Hero;
