import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from "../../home/Home";
import axios, { AxiosResponse } from "axios";
import { mockDataForHealthTopics } from "../__fixtures__/mockDataForTests";

jest.mock("axios");

it("should display the isLoadingGif and then the health topics content on page, once the healthTopic state is feed by the api request", async () => {
	const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
	const endpointSearchHealthTopics = "topicsearch.json?keyword=";
	const keyword = "vaccine";

	const mockedResponse: AxiosResponse = {
		data: mockDataForHealthTopics,
		status: 200,
		statusText: "OK",
		headers: {},
		config: {},
	};

	function mockApiCall(url: string) {
		if (url === `${baseUrl}${endpointSearchHealthTopics}${keyword}`) {
			return Promise.resolve(mockedResponse);
		} else {
			return Promise.resolve({
				data: [],
			});
		}
	}

	axios.get.mockImplementation(mockApiCall);

	render(<Home />);

	const searchInput: any = screen.queryByPlaceholderText("Search a keyword");

	fireEvent.change(searchInput, { target: { value: keyword } });

	//performing the search
	const searchBtn: any = screen.queryByText("SEARCH");
	fireEvent.click(searchBtn);

	//before the await, checking if isLoading gif is on page.
	expect(screen.getByRole("img")).toBeInTheDocument();

	const title1 = await screen.findByText("Get Your Child the HPV Vaccine");
	expect(title1).toBeInTheDocument();

	const title2 = screen.getByText("Choosing a Doctor: Quick Tips");
	expect(title2).toBeInTheDocument();

    //after the await, checking if isLoading gif is on page.
    expect(screen.queryByAltText("isLoadingGif")).not.toBeInTheDocument()
	
});

it("should display that something went wrong if the response status code is not 200", async () => {
	const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
	const endpointSearchHealthTopics = "topicsearch.json?keyword=";
	const keyword = "vaccine";

	const mockedResponse: AxiosResponse = {
		data: [],
		status: 404,
		statusText: "OK",
		headers: {},
		config: {},
	};

	function mockApiCall(url: string) {
		if (url === `${baseUrl}${endpointSearchHealthTopics}${keyword}`) {
			return Promise.resolve(mockedResponse);
		} else {
			return Promise.resolve({
				data: [],
			});
		}
	}

	axios.get.mockImplementation(mockApiCall);

	render(<Home />);

	const searchInput: any = screen.queryByPlaceholderText("Search a keyword");

	fireEvent.change(searchInput, { target: { value: keyword } });

	//performing the search
	const searchBtn: any = screen.queryByText("SEARCH");
	fireEvent.click(searchBtn);

	const title2 = await screen.findByText("Sorry, something went wrong. Please, try again later.");
	expect(title2).toBeInTheDocument();
	
});
