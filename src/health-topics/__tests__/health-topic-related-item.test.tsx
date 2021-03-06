import React from "react";
import { render, screen } from "@testing-library/react";
import HealthTopicRelatedItem from "../HealthTopicRelatedItem";

describe("<HealthTopicRelatedItem />", () => {
	it("should display the related item title and content", () => {
		const title = "This is a related item title";
		const url = "This is a related item url";
		const id = "this is a related item ID";

		render(<HealthTopicRelatedItem title={title} url={url} id={id} />);

		expect(screen.getByText("This is a related item title")).toBeInTheDocument();
		expect(screen.getByText("Read More")).toHaveAttribute("href", url);
	});
});
