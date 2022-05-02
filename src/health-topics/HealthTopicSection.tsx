import React, { useState } from "react";
import { Section } from "../types";
import parse from "html-react-parser";

const HealthTopicSection: React.FC<Section> = ({ title, content }) => {
	const [expandContent, setExpandContent] = useState(false);

	const handleOnClickContent = () => {
		setExpandContent(!expandContent);
	};

	return (
		<div className="col-sm-8 mt-3">
			<p className="font-weight-bold">{title ? title : "empty title"}
			<button className="btn btn-outline-info badge mx-3" onClick={handleOnClickContent}>
				{expandContent ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
			</button>
			</p>
			{expandContent && <div className="mt-3">{parse(content)}</div>}
		</div>
	);
};

export default HealthTopicSection;
