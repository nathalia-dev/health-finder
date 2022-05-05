import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
	return (
		<footer className="footer bg-dark mt-5 py-3">
			<div className="container">
				<a href="https://www.kickresume.com/cv/nathalia-dev/" className="resume-link"><i className="fab fa-github pr-2 icon"></i>
					https://github.com/nathalia-dev/join-deliberate
				</a>
			</div>
		</footer>
	);
};

export default Footer;
