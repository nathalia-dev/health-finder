import React from "react";
import { render, screen } from "@testing-library/react";
import HealthTopicList from '../HealthTopicsList'


it("should display the health topic title and content", async () => {
    const title1 = "This is a health topic title1"
    const title2 = "This is a health topic title2"
    const categories1 = "This is a health topic categories1"
    const categories2 = "This is a health topic categories2"
    const id = "this is a health topic ID"
    const id2 = "this is a health topic ID2"
    const image = {imageUrl: "imageUrl", imageAlt: "imageAlt"}
    const relatedItem = [{title: "related item title", url:"related item url", id: "related item id"}]
    const sections = [{title: "section title", content:"section content", id: "section item id"}]
    const healthTopics= [{title: title1, categories: categories1, id, image, relatedItem, sections}, {title: title2, categories: categories2, id:id2, image, relatedItem, sections}]

    render(<HealthTopicList healthTopics={healthTopics}/>)

    expect(screen.getByText("This is a health topic title1")).toBeInTheDocument();
    expect(screen.getByText("This is a health topic categories1")).toBeInTheDocument();
    expect(screen.getByText("This is a health topic title2")).toBeInTheDocument();
    expect(screen.getByText("This is a health topic categories2")).toBeInTheDocument();

})
