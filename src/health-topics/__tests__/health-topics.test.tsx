import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from "../../home/Home"
import axios, {AxiosResponse} from "axios";
import { mockDataForHealthTopics } from "../__fixtures__/mockDataForTests"


jest.mock("axios");

it("should display the health topics content on page", async () => {
	const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
	const endpointSearchHealthTopics = "topicsearch.json?keyword=";
    const keyword = "vaccine"

    const mockedResponse: AxiosResponse = {
        data: mockDataForHealthTopics,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {},
    };


	function mockApiCall (url: string) {
		if (url === `${baseUrl}${endpointSearchHealthTopics}${keyword}`) {
			return Promise.resolve(mockedResponse);
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

  const categories = screen.getByText("Cervical Cancer, Shots (Vaccines)")
  expect(categories).toBeInTheDocument()

  const relatedItemBtn = screen.getAllByText("Related Items")
  expect(relatedItemBtn[0]).toBeInTheDocument()

  const articlesBtn = screen.getAllByText("Sections(Articles)")
  expect(articlesBtn[0]).toBeInTheDocument()

  const title2 = screen.getByText("Choosing a Doctor: Quick Tips")
  expect(title2).toBeInTheDocument()

  fireEvent.click(relatedItemBtn[0])
  fireEvent.click(articlesBtn[0])
  
  const relItemTitle = screen.getByText("Get Your Pre‑teen’s Shots on Schedule")
  expect(relItemTitle).toBeInTheDocument()

  const SectionTitle = screen.getByText("Take Action: See a Doctor")
  expect(SectionTitle).toBeInTheDocument()
    //clicar no + da section(articles) para ver content. Mas como pegar esse btn?


});

// export {}