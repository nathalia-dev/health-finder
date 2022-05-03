import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Search from "../search/Search";
import axios, {AxiosResponse} from "axios";
import { mockDataForSuggestions } from "../mockDataForTests"

jest.mock("axios");

it("shows autocomplete suggestions when you change input (search) value", () => {
	const setIsLoadingHealthTopics = jest.fn((value) => {});
	const setHealthTopics = jest.fn((value) => {});
	const setError = jest.fn((value) => {});

	render(<Search setIsLoadingHealthTopics={setIsLoadingHealthTopics} setHealthTopics={setHealthTopics} setError={setError} />);

	const searchInput: any = screen.queryByPlaceholderText("Search a keyword");

	fireEvent.change(searchInput, { target: { value: "heal" } });

	expect(searchInput.value).toBe("heal");
});

it("should have the searchInput disabled when initialized", () => {
	const setIsLoadingHealthTopics = jest.fn((value) => {});
	const setHealthTopics = jest.fn((value) => {});
	const setError = jest.fn((value) => {});

	render(<Search setIsLoadingHealthTopics={setIsLoadingHealthTopics} setHealthTopics={setHealthTopics} setError={setError} />);

	expect(screen.queryByPlaceholderText("Search a keyword")).toBeDisabled();
});

it("should have the searchInput available after api call for suggestions finalize", async () => {
	const setIsLoadingHealthTopics = jest.fn((value) => {});
	const setHealthTopics = jest.fn((value) => {});
	const setError = jest.fn((value) => {});
	const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
	const endpointSearchSuggestions = "itemlist.json";

	const mockedResponse: AxiosResponse = {
        data: mockDataForSuggestions,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
    };

	function mockApiCall (url: string) {
		if (url === `${baseUrl}${endpointSearchSuggestions}`) {
			return Promise.resolve(mockedResponse);
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

    const mockedResponse: AxiosResponse = {
        data: mockDataForSuggestions,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
      };

	function mockApiCall (url: string) {
		if (url === `${baseUrl}${endpointSearchSuggestions}`) {
			return Promise.resolve(
				mockedResponse)
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
	// needed to change to queryByText as getBy throw an error when do not find the element.
	expect(screen.queryByText("keep")).toBeNull();
});

// export {}