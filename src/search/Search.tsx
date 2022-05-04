import React, { useState, useEffect } from "react";
import Suggestion from "./Suggestion";
import {getHealthTopicsByKeyword, getAllAvailableSuggestions} from "../api/myHealthFinderApi";
import "./search.css";


interface SearchProps {
	setHealthTopics: React.Dispatch<any>;
	setIsError: React.Dispatch<Boolean>;
	setIsLoadingHealthTopics: React.Dispatch<Boolean>;
}

const Search: React.FC<SearchProps> = ({ setHealthTopics, setIsError, setIsLoadingHealthTopics }) => {
	const [keyword, setKeyword] = useState("");
	const [matchedSuggestions, setMatchedSuggestions] = useState<string[]>([]);
	const [allAvailableSuggestions, setAllAvailableSuggestions] = useState<string[]>([]);
    const [isLoadingAllAvailableSuggestions, setIsLoadingAllAvailableSuggestions] = useState<boolean>(false)

	const fetchDataForHealthTopics = async () => {
		try {
			setIsLoadingHealthTopics(true);
			const res = await getHealthTopicsByKeyword(keyword)
			if (res.isError) {
				setIsError(true)
			}
			setHealthTopics(res.data);
			setIsLoadingHealthTopics(false);
		} catch (error) {
			setIsError(true);
			setIsLoadingHealthTopics(false);
		}
	};

	//Add the isLoading state here to avoid delay on autosearch suggestions, if the user type too fast.
	const fetchDataForSuggestions = async () => {
		try {
			setIsLoadingAllAvailableSuggestions(true);
			const res = await getAllAvailableSuggestions()
			setAllAvailableSuggestions(res.data)
			setIsLoadingAllAvailableSuggestions(false)
		} catch (e) {
			setAllAvailableSuggestions([]);
			setIsLoadingAllAvailableSuggestions(false);
		}
	};

	const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setKeyword(value);
		let matches: string[] = [];

		if (value.length > 0) {
			matches = allAvailableSuggestions.filter((topic) => {
				const regex = new RegExp(`${value.toLowerCase()}`, "gi");
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
		if (isLoadingAllAvailableSuggestions) {
			const props = { disabled: true };
			return props;
		}
	};

	useEffect(() => {
		fetchDataForSuggestions();
	}, []);

	return (
		<div>
			<form className="form-inline justify-content-center" style={{height: "50px"}}onSubmit={handleSubmit}>
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
					SEARCH <i className="fas fa-search"></i>
				</button>
			</form>

			{matchedSuggestions.length > 0 &&
				matchedSuggestions.map((suggestion) => (
					<div key={suggestion} className="form-inline justify-content-center">
						<div className="form-control suggestion-display w-50">
						<Suggestion key={suggestion} matchedSuggestion={suggestion} setMatchedSuggestions={setMatchedSuggestions} setKeyword={setKeyword} />
					</div>

					</div>

				))}
		</div>
	);
};

export default Search;
