import React, { useState, useEffect } from "react";
import formatApiData from "../helpers/formatApiData";
import formatApiDataForSuggestions from "../helpers/formatApiDataForSuggestions";
import searchQueryFormat from "../helpers/searchQueryFormat";
import axios from "axios";
import Suggestion from "./Suggestion";
import "./search.css";

interface SearchProps {
	setHealthTopics: React.Dispatch<any>;
	setError: React.Dispatch<any>;
	setIsLoading: React.Dispatch<Boolean>;
	isLoading: Boolean;
}

const Search: React.FC<SearchProps> = ({ setHealthTopics, setError, setIsLoading, isLoading }) => {
	const [keyword, setKeyword] = useState("");
	const [matchedSuggestions, setMatchedSuggestions] = useState<string[]>([]);
	const [allAvailableSuggestions, setAllAvailableSuggestions] = useState<string[]>([]);

	const baseUrl = "https://health.gov/myhealthfinder/api/v3/";
	const endpointSearchHealthTopics = "topicsearch.json?keyword=";
	const endpointSearchSuggestions = "itemlist.json";

	const fetchDataForHealthTopics = async () => {
		try {
			setIsLoading(true);
			//vulnerabilidades.
			const res = await axios.get(`${baseUrl}${endpointSearchHealthTopics}${searchQueryFormat(keyword)}`);
			//checking the response status code.
			if (res.status !== 200) {
				setError([{ status: res.status, message: "Something went wrong, please try again later" }]);
				setIsLoading(false);
			}
			//checking if the response found any topics.
			if (res.data.Result.Total === 0) {
				//If not, return an empty array.
				setHealthTopics([]);
				setIsLoading(false);
			} else {
				const formatedData = formatApiData(res.data.Result.Resources.Resource);
				setHealthTopics(formatedData);
				setIsLoading(false);
			}
		} catch (error) {
			setError(error);
			setIsLoading(false);
		}
	};

	//Add the isLoading state here to avoid delay on autosearch suggestions , if the user type too fast.
	const fetchDataForSuggestions = async () => {
		try {
			setIsLoading(true);
			//requisitar com default.
			const res = await axios.get(`${baseUrl}${endpointSearchSuggestions}`);
			if (res.status !== 200) {
				setIsLoading(false);
			}
			if (res.data.Result.Total === 0) {
				setIsLoading(false);
			} else {
				const formatedData = formatApiDataForSuggestions(res.data.Result.Items.Item);
				setAllAvailableSuggestions(formatedData);
				setIsLoading(false);
			}
		} catch (e) {
			setAllAvailableSuggestions([]);
			setIsLoading(false);
		}
	};

	const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setKeyword(value);
		let matches: string[] = [];

		if (value.length > 0) {
			matches = allAvailableSuggestions.filter((topic) => {
				const regex = new RegExp(`${value}`, "gi");
				return topic.match(regex);
			});
		}
		setMatchedSuggestions(matches);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		fetchDataForHealthTopics();
		setKeyword("");
		setMatchedSuggestions([]);
	};

	const disableInputWhileLoading = () => {
		if (isLoading) {
			const props = { disabled: true };
			return props;
		}
	};

	useEffect(() => {
		fetchDataForSuggestions();
	}, []);

	return (
		<div>
			<form className="form-inline justify-content-center" onSubmit={handleSubmit}>
				<input
					type="text"
					name="keyword"
					placeholder="Search a keyword"
					className="form-control w-50"
					value={keyword}
					onChange={handleChange}
					onBlur={() => {
						setTimeout(() => {
							setMatchedSuggestions([]);
						}, 300);
					}}
					{...disableInputWhileLoading()}
				/>
				<button className="btn btn-primary m-3">
					<i className="fas fa-search"></i>
				</button>
			</form>

			{matchedSuggestions.length > 0 &&
				matchedSuggestions.map((suggestion) => (
					<div className="suggestion-display">
						<Suggestion key={suggestion} matchedSuggestion={suggestion} setMatchedSuggestions={setMatchedSuggestions} setKeyword={setKeyword} />
					</div>
				))}
		</div>
	);
};

export default Search;
