import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";
import Search from "./search/Search";
import Home from "./Home"
import axios from "axios";
import { mockDataForSuggestions, mockDataForHealthTopics } from "./mockDataForTests"


jest.mock("axios");

test("it renders app with head, home and footer component, with no api responses yet.", () => {
	render(<App />);

	const searchElement = screen.getByText("SEARCH");
	const homeElement = screen.getByText("WELCOME");
	const footerElement = screen.getByText("footer");

	expect(searchElement).toBeInTheDocument();
	expect(homeElement).toBeInTheDocument();
	expect(footerElement).toBeInTheDocument();
});

it("shows autocomplete suggestions when you change input (search) value", () => {
	const setIsLoadingHealthTopics = jest.fn((value) => {});
	const setHealthTopics = jest.fn((value) => {});
	const setError = jest.fn((value) => {});

	render(<Search setIsLoadingHealthTopics={setIsLoadingHealthTopics} setHealthTopics={setHealthTopics} setError={setError} />);

	const searchInput: any = screen.queryByPlaceholderText("Search a keyword");

	fireEvent.change(searchInput, { target: { value: "heal" } });

	expect(searchInput.value).toBe("heal");
});

it("should have the input disabled when initialized", () => {
	const setIsLoadingHealthTopics = jest.fn((value) => {});
	const setHealthTopics = jest.fn((value) => {});
	const setError = jest.fn((value) => {});

	render(<Search setIsLoadingHealthTopics={setIsLoadingHealthTopics} setHealthTopics={setHealthTopics} setError={setError} />);

	expect(screen.queryByPlaceholderText("Search a keyword")).toBeDisabled();
});

it("should have the input available after api call for suggestions finalize", async () => {
	const setIsLoadingHealthTopics = jest.fn((value) => {});
	const setHealthTopics = jest.fn((value) => {});
	const setError = jest.fn((value) => {});
	const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
	const endpointSearchSuggestions = "itemlist.json";

	function mockApiCall (url: string) {
		if (url === `${baseUrl}${endpointSearchSuggestions}`) {
			return Promise.resolve({
				data: mockDataForSuggestions});
		} else {
			return Promise.resolve({
				data: [],
			});
		}
	}

	axios.get.mockImplementation(mockApiCall);

	await act(async () => render(<Search setIsLoadingHealthTopics={setIsLoadingHealthTopics} setHealthTopics={setHealthTopics} setError={setError} />));

	expect(screen.queryByPlaceholderText("Search a keyword")).toHaveProperty('disabled', false)

});

it("should show autocomplete suggestions that matches with input value", async () => {
	const setIsLoadingHealthTopics = jest.fn((value) => {});
	const setHealthTopics = jest.fn((value) => {});
	const setError = jest.fn((value) => {});
	const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
	const endpointSearchSuggestions = "itemlist.json";

	function mockApiCall (url: string) {
		if (url === `${baseUrl}${endpointSearchSuggestions}`) {
			return Promise.resolve({
				data: mockDataForSuggestions});
		} else {
			return Promise.resolve({
				data: [],
			});
		}
	}

	axios.get.mockImplementation(mockApiCall);

	await act(async () => render(<Search setIsLoadingHealthTopics={setIsLoadingHealthTopics} setHealthTopics={setHealthTopics} setError={setError} />));

	const searchInput: any = screen.queryByPlaceholderText("Search a keyword");

	fireEvent.change(searchInput, { target: { value: "heal" } });

	expect(searchInput.value).toBe("heal");
	expect(screen.getByText("healthy")).toBeInTheDocument();
	//needed to change to queryByText as getBy throw an error when do not find the element.
	expect(screen.queryByText("keep")).toBeNull();
});

it("should clear autocomplete suggestions if user click to use one of them", async () => {
	const setIsLoadingHealthTopics = jest.fn((value) => {});
	const setHealthTopics = jest.fn((value) => {});
	const setError = jest.fn((value) => {});
	const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
	const endpointSearchSuggestions = "itemlist.json";

	function mockApiCall (url: string) {
		if (url === `${baseUrl}${endpointSearchSuggestions}`) {
			return Promise.resolve({
				data: mockDataForSuggestions});
		} else {
			return Promise.resolve({
				data: [],
			});
		}
	}

	axios.get.mockImplementation(mockApiCall);

	await act(async () => render(<Search setIsLoadingHealthTopics={setIsLoadingHealthTopics} setHealthTopics={setHealthTopics} setError={setError} />));

	const searchInput: any = screen.queryByPlaceholderText("Search a keyword");

	fireEvent.change(searchInput, { target: { value: "heal" } });

	expect(searchInput.value).toBe("heal");
	expect(screen.getByText("healthy")).toBeInTheDocument();
  expect(screen.getByText("health")).toBeInTheDocument();

  const suggestionDiv: any = screen.queryByText("healthy")

  fireEvent.click(suggestionDiv)
  expect(screen.queryByText("healthy")).toBeNull();
  expect(screen.queryByText("health")).toBeNull();

});


it("should display the health topics content on page", async () => {
	const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
	const endpointSearchHealthTopics = "topicsearch.json?keyword=";
  const keyword = "vaccine"



	function mockApiCall (url: string) {
		if (url === `${baseUrl}${endpointSearchHealthTopics}${keyword}`) {
			return Promise.resolve({
				data: mockDataForHealthTopics});
		} else {
			return Promise.resolve({
				data: [],
			});
		}
	}

	axios.get.mockImplementation(mockApiCall);

  render(<Home />)

  const searchInput: any = screen.queryByPlaceholderText("Search a keyword");

	fireEvent.change(searchInput, { target: { value: keyword } });


  const searchBtn: any = screen.queryByText("SEARCH")
  fireEvent.click(searchBtn)

  const title1 = await screen.findByText("Get Your Child the HPV Vaccine")
  expect(title1).toBeInTheDocument()

  const categories = await screen.findByText("Cervical Cancer, Shots (Vaccines)")
  expect(categories).toBeInTheDocument()

  const relatedItemBtn = await screen.findAllByText("Related Items")
  expect(relatedItemBtn[0]).toBeInTheDocument()

  const articlesBtn = await screen.findAllByText("Sections(Articles)")
  expect(articlesBtn[0]).toBeInTheDocument()

  const title2 = await screen.findByText("Choosing a Doctor: Quick Tips")
  expect(title2).toBeInTheDocument()

  fireEvent.click(relatedItemBtn[0])
  fireEvent.click(articlesBtn[0])
  
  const relItemTitle = await screen.findByText("Get Your Pre‑teen’s Shots on Schedule")
  expect(relItemTitle).toBeInTheDocument()

  const SectionTitle = await screen.findByText("Take Action: See a Doctor")
  expect(SectionTitle).toBeInTheDocument()
    //clicar no + da section(articles) para ver content. Mas como pegar esse btn?


});

export {}