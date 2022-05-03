import React, { useState } from "react";
import { HealthTopic } from "../types";
import HealthTopicRelatedItem from "./HealthTopicRelatedItem";
import HealthTopicSection from "./HealthTopicSection";

const HealthTopicItem: React.FC<HealthTopic> = ({ id, title, categories, image, relatedItem, sections }) => {
	const [expandRelItem, setExpandRelItem] = useState(false);
	const [expandSection, setExpandSection] = useState(false);

	const handleOnClickRelItem = () => {
		setExpandRelItem(!expandRelItem);
	};

	const handleOnClickSection = () => {
		setExpandSection(!expandSection);
	};

	return (
		<div className="row p-2 bg-white border rounded">
			<div className="col-md-3 mt-1">
				<img className="img-fluid img-responsive rounded product-image" src={image.imageUrl} alt={image.imageAlt} />
			</div>
			<div className="col-md-6 mt-1">
				<h5>{title}</h5>
				<div className="d-flex flex-row">
					<div className="mt-2 mb-1 spec-1 "> <span className="badge badge-success">Categories:</span> {categories}</div>
				</div>
			</div>
			<div className="align-items-center align-content-center col-md-3 border-left mt-1">
				<div className="d-flex flex-column mt-4">
					<button className="btn btn-primary btn-sm" type="button" onClick={handleOnClickRelItem}>
						{expandRelItem ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>} Related Items
					</button>
					<button className="btn btn-outline-primary btn-sm mt-2" onClick={handleOnClickSection} type="button">
						{expandSection ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>} Sections(Articles)
					</button>
				</div>
			</div>
			<div className="row p-2 bg-white mx-0 justify-content-center">
				{expandRelItem && relatedItem.map((relItem) => <HealthTopicRelatedItem key={relItem.id} {...relItem} />)}
				{expandSection && sections.map((secItem) => <HealthTopicSection key={secItem.id} {...secItem} />)}
			</div>
		</div>
	);
};

export default HealthTopicItem;
