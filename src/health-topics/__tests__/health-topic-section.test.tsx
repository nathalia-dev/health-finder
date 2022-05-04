import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HealthTopicSection from '../HealthTopicSection'


describe ("testing the core functionalities of HealthTopicSection component", function () {
    it("should display the section title and content", async () => {
        const title = "This is a section title"
        const content = "This is a section content"
        const id = "this is a section ID"
    
    
        render(<HealthTopicSection title={title} content={content} id={id}/>)
    
        expect(screen.getByText("This is a section title")).toBeInTheDocument();
        const expandBtn = screen.getByRole("button")
    
        fireEvent.click(expandBtn)
        expect(screen.getByText("This is a section content")).toBeInTheDocument();
    
    
    })

})



