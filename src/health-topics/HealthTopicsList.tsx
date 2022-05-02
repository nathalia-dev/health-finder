import React from "react";
import HealthTopicsItem from "./HealthTopicItem";
import { HealthTopic } from "../types";
import "./healthTopic.css"

interface HealthTopicsListProps {
	healthTopics: HealthTopic[];
}

const HealthTopicsList: React.FC<HealthTopicsListProps> = ({ healthTopics }) => {
	return (
		<div className="container mt-5 mb-5">
			<div className="d-flex justify-content-center row">
				<div className="col-md-10">
					{healthTopics.map((topic) => (
						<HealthTopicsItem key={topic.id} {...topic} />
					))}
				</div>
			</div>
		</div>
	);
};

export default HealthTopicsList;
