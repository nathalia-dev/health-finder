import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
	test("it renders app with head, home and footer component, with no api responses yet.", () => {
		render(<App />);

		const searchElement = screen.getByText("SEARCH");
		const homeElement = screen.getByText("Welcome to Health Finder");
		const footerElement = screen.getByText("https://github.com/nathalia-dev/join-deliberate");

		expect(searchElement).toBeInTheDocument();
		expect(homeElement).toBeInTheDocument();
		expect(footerElement).toBeInTheDocument();
	});
});
