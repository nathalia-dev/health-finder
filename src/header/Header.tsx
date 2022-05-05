import React from "react";
import "./header.css";

const Header: React.FC = () => {
	return (
		<div className="app-header">
			<h1 className="text-info">Welcome to Health Finder</h1>
			<p className="lead">Your trustworthy tool to find realiable content about health over the internet.</p>
		</div>
	);
};

export default Header;
