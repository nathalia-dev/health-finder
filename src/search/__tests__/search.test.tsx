/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Search from "../Search";
import axios, { AxiosResponse } from "axios";
import { mockDataForSuggestions } from "../__fixtures__/mockDataForTests";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<Search />", () => {
	const setIsLoadingHealthTopics = jest.fn((value) => {});
	const setHealthTopics = jest.fn((value) => {});
	const setIsError = jest.fn((value) => {});
	const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
	const endpointSearchSuggestions = "itemlist.json";

	it("should have the searchInput disabled when initialized, while the fetchData for suggestions is happening", () => {
		render(<Search setIsLoadingHealthTopics={setIsLoadingHealthTopics} setHealthTopics={setHealthTopics} setIsError={setIsError} />);

		expect(screen.queryByPlaceholderText("Search")).toBeDisabled();
	});

	it("should have the searchInput available after api call for suggestions finalize", async () => {
		const mockedResponse: AxiosResponse = {
			data: mockDataForSuggestions,
			status: 200,
			statusText: "OK",
			headers: {},
			config: {},
		};

		function mockApiCall(url: string) {
			if (url === `${baseUrl}${endpointSearchSuggestions}`) {
				return Promise.resolve(mockedResponse);
			} else {
				return Promise.resolve({
					data: [],
				});
			}
		}

		mockedAxios.get.mockImplementation(mockApiCall);

		// @ts-ignore
		await act(async () => render(<Search setIsLoadingHealthTopics={setIsLoadingHealthTopics} setHealthTopics={setHealthTopics} setIsError={setIsError} />));

		expect(screen.queryByPlaceholderText("Search")).toHaveProperty("disabled", false);
	});

	it("should show autocomplete suggestions when you change input (search) value", async () => {
		const setIsLoadingHealthTopics = jest.fn((value) => {});
		const setHealthTopics = jest.fn((value) => {});
		const setIsError = jest.fn((value) => {});

		const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
		const endpointSearchSuggestions = "itemlist.json";

		const mockedResponse: AxiosResponse = {
			data: mockDataForSuggestions,
			status: 200,
			statusText: "OK",
			headers: {},
			config: {},
		};

		function mockApiCall(url: string) {
			if (url === `${baseUrl}${endpointSearchSuggestions}`) {
				return Promise.resolve(mockedResponse);
			} else {
				return Promise.resolve({
					data: [],
				});
			}
		}

		mockedAxios.get.mockImplementation(mockApiCall);

		// @ts-ignore
		await act(async () => render(<Search setIsLoadingHealthTopics={setIsLoadingHealthTopics} setHealthTopics={setHealthTopics} setIsError={setIsError} />));

		const searchInput: any = screen.queryByTestId("inputSearch");

		fireEvent.change(searchInput, { target: { value: "heal" } });

		expect(searchInput.value).toBe("heal");
		expect(screen.getByText("health")).toBeInTheDocument();
		expect(screen.getByText("healthy")).toBeInTheDocument();
	});

	it("should show autocomplete suggestions that matches with input value", async () => {
		const setIsLoadingHealthTopics = jest.fn((value) => {});
		const setHealthTopics = jest.fn((value) => {});
		const setIsError = jest.fn((value) => {});
		const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
		const endpointSearchSuggestions = "itemlist.json";

		const mockedResponse: AxiosResponse = {
			data: mockDataForSuggestions,
			status: 200,
			statusText: "OK",
			headers: {},
			config: {},
		};

		function mockApiCall(url: string) {
			if (url === `${baseUrl}${endpointSearchSuggestions}`) {
				return Promise.resolve(mockedResponse);
			} else {
				return Promise.resolve({
					data: [],
				});
			}
		}

		mockedAxios.get.mockImplementation(mockApiCall);

		// @ts-ignore
		await act(async () => render(<Search setIsLoadingHealthTopics={setIsLoadingHealthTopics} setHealthTopics={setHealthTopics} setIsError={setIsError} />));

		const searchInput: any = screen.queryByPlaceholderText("Search");
		fireEvent.change(searchInput, { target: { value: "heal" } });

		expect(searchInput.value).toBe("heal");
		expect(screen.getByText("healthy")).toBeInTheDocument();
		expect(screen.queryByText("doctor")).not.toBeInTheDocument();
		expect(screen.queryByText("conditions")).not.toBeInTheDocument();
	});

	it("should change the input (search) value when you click in one suggestion", async () => {
		const setIsLoadingHealthTopics = jest.fn((value) => {});
		const setHealthTopics = jest.fn((value) => {});
		const setIsError = jest.fn((value) => {});

		const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
		const endpointSearchSuggestions = "itemlist.json";

		const mockedResponse: AxiosResponse = {
			data: mockDataForSuggestions,
			status: 200,
			statusText: "OK",
			headers: {},
			config: {},
		};

		function mockApiCall(url: string) {
			if (url === `${baseUrl}${endpointSearchSuggestions}`) {
				return Promise.resolve(mockedResponse);
			} else {
				return Promise.resolve({
					data: [],
				});
			}
		}

		mockedAxios.get.mockImplementation(mockApiCall);

		// @ts-ignore
		await act(async () => render(<Search setIsLoadingHealthTopics={setIsLoadingHealthTopics} setHealthTopics={setHealthTopics} setIsError={setIsError} />));

		const searchInput: any = screen.queryByPlaceholderText("Search");

		fireEvent.change(searchInput, { target: { value: "heal" } });

		expect(searchInput.value).toBe("heal");

		const suggestionDiv: any = screen.getByText("healthy");
		fireEvent.click(suggestionDiv);

		expect(searchInput.value).toBe("healthy");
	});
});
