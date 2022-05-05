import axios from "axios";
import mapRawDataIntoHealthTopic from "../helpers/mapRawDataIntoHealthTopic";
import mapRawDataIntoAllAvailableSuggestions from "../helpers/mapRawDataIntoAllAvailableSuggestions";
import searchQueryFormat from "../helpers/searchQueryFormat";

const BASE_URL = "https://health.gov/myhealthfinder/api/v3/";

export const getHealthTopicsByKeyword = async (keyword: string) => {
	try {
		const endpoint = "topicsearch.json?keyword=";
		const res = await axios.get(`${BASE_URL}${endpoint}${searchQueryFormat(keyword)}`);

		if (!res || res?.status !== 200) {
			return { data: [], isError: true };
		}

		if (res.data?.Result?.Total === 0 || !res.data.Result.Resources?.Resource) {
			return { data: [], isError: false };
		}

		const mappedData = mapRawDataIntoHealthTopic(res.data.Result.Resources.Resource);
		return { data: mappedData, isError: false };
	} catch (error: any) {
		return { data: [], isError: true };
	}
};

export const getAllAvailableSuggestions = async () => {
	try {
		const endpoint = "itemlist.json";
		const res = await axios.get(`${BASE_URL}${endpoint}`);
		if (res.status !== 200) {
			return { data: [], isError: true };
		}

		if (res.data?.Result?.Total === 0 || !res.data.Result.Items?.Item) {
			return { data: [], isError: false };
		}

		const mappedData = mapRawDataIntoAllAvailableSuggestions(res.data.Result.Items.Item);
		return { data: mappedData, isError: false };
	} catch (error) {
		return { data: [], isError: true };
	}
};
