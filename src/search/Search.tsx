import React, {useState, useEffect} from "react";
import formatApiData from "../helpers/formatApiData";
import formatApiDataForAutoComplete from "../helpers/formatApiDataForAutoComplete";
import searchQueryFormat from '../helpers/searchQueryFormat'
import axios from "axios"
import Suggestion from "./Suggestion"
import './search.css'

interface SearchProps {
    setHealthTopics: React.Dispatch<any>
    setError: React.Dispatch<any>
    setIsLoading: React.Dispatch<Boolean>

}

const Search: React.FC <SearchProps> = ({setHealthTopics, setError, setIsLoading}) => {
    const [keyword, setKeyword] = useState('')
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [apiTopics, setApiTopics] = useState<string[]>([])

    const baseUrl = 'https://health.gov/myhealthfinder/api/v3/'
    const endpointSearchByKeyword = 'topicsearch.json?keyword='
    const endpointSearchByTopic = 'itemlist.json?type=topic'

    const fetchDataForSearchResults = async () => {
        try{
            //vulnerabilidades.
            const res = await axios.get(`${baseUrl}${endpointSearchByKeyword}${searchQueryFormat(keyword)}`)
            //checking the response status code.
            if (res.status !== 200) {
                setError([{status: res.status, message: "Something went wrong, please try again later"}])
                setIsLoading(false)
            }
            //checking if the response found any topics. 
            if (res.data.Result.Total === 0) {
                //If not, return an empty array.
                setHealthTopics([])
                setIsLoading(false)
            } else {
                const formatedData = formatApiData(res.data.Result.Resources.Resource)
                setHealthTopics(formatedData)
                setIsLoading(false)
            }


        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    //qual sentido de ir coloando setApiTopics([]) se ele ja é um empty array. 
    const fetchDataForAutoComplete = async () => {
        try {
            const res = await axios.get(`${baseUrl}${endpointSearchByTopic}`)
            if (res.status !== 200) {
                setApiTopics([])
            }
            if (res.data.Result.Total === 0) {
                setApiTopics([])
            } else {
                const formatedData = formatApiDataForAutoComplete(res.data.Result.Items.Item)
                setApiTopics(formatedData)
            }
        } catch (e) {
            setApiTopics([])
        }
       
    }

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setKeyword(value)

        let matches:string[] = []

        if (value.length > 0) {
            matches = apiTopics.filter((topic) => { 
                const regex = new RegExp(`${value}`, "gi")
                return topic.match(regex)
            })
        }
        setSuggestions(matches)

    }
    console.log(keyword)
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        fetchDataForSearchResults()
        setKeyword('')
        setSuggestions([])
    }

    useEffect(() => {
        fetchDataForAutoComplete()
    }, [])

	return (
		<div>
			<form className="form-inline justify-content-center" onSubmit={handleSubmit}>
				<input type="text" name="keyword" placeholder="Search a keyword" className="form-control w-50" value={keyword}
                onChange={handleChange}  
                onBlur={() => {
                    setTimeout(() => {
                        setSuggestions([])
                    }, 100)
                }}/>
				<button className="btn btn-primary m-3">
					<i className="fas fa-search"></i>
				</button>
			</form>
            
            {suggestions.length > 0 && suggestions.map((suggestion) => <div className="suggestion-display"><Suggestion suggestion={suggestion} setSuggestions={setSuggestions} setKeyword={setKeyword}/> </div>)}
            
            
		</div>
	);
};

export default Search;
