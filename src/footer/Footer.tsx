import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
	return (
		<footer className="footer bg-dark mt-5 py-3">
			<div className="container">
				<a href="https://github.com/nathalia-dev/join-deliberate" className="resume-link" target="_blank" rel="noreferrer">
					<i className="fab fa-github pr-2 icon"></i>
					https://github.com/nathalia-dev/join-deliberate
				</a>
			</div>
		</footer>
	);
};

export default Footer;
