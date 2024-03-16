import "./navbar.scss";
import insta from "../../images/instagram.png";
import github from "../../images/GitHub.png";
import linkedin from "../../images/LinkedIn3.png";
import x from "../../images/X.png";
import SideBar from "../SideBar/SideBar";

import { motion } from "framer-motion";

const NavBar = () => {
	return (
		<div className="navbar">
			<SideBar />

			<div className="wrapper">
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					Puneet NJ
				</motion.span>

				<div className="socials">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/puneet-nj-a5a0161bb/"
					>
						<img src={linkedin} alt="LinkedIn" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/puneet-nj"
					>
						<img src={github} alt="GitHub" />
					</a>

					<a
						target="_blank"
						rel="noreferrer"
						href="https://twitter.com/puneet_nj"
					>
						<img src={x} alt="X" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.instagram.com/puneetnj/"
					>
						<img src={insta} alt="Instagram" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
