import React from "react";
import { render, screen } from "@testing-library/react";
import HealthTopicItem from "../HealthTopicItem";

describe("<HealthTopiItem />", () => {
	it("should display the health topic title and content", () => {
		const title = "This is a health topic title";
		const categories = "This is a health topic categories";
		const id = "this is a health topic ID";
		const image = { imageUrl: "imageUrl", imageAlt: "imageAlt" };
		const relatedItem = [{ title: "related item title", url: "related item url", id: "related item id" }];
		const sections = [{ title: "section title", content: "section content", id: "section item id" }];

		render(<HealthTopicItem title={title} categories={categories} id={id} image={image} relatedItem={relatedItem} sections={sections} />);

		expect(screen.getByText("This is a health topic title")).toBeInTheDocument();
		expect(screen.getByText("This is a health topic categories")).toBeInTheDocument();
		expect(screen.getByRole("img")).toBeInTheDocument();
		expect(screen.getByText("Related Items")).toBeInTheDocument();
		expect(screen.getByText("Sections(Articles)")).toBeInTheDocument();
	});
});
