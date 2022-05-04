import axios from "axios";
import mapRawDataIntoHealthTopic from "../helpers/mapRawDataIntoHealthTopic";
import mapRawDataIntoAllAvailableSuggestions from "../helpers/mapRawDataIntoAllAvailableSuggestions";
import searchQueryFormat from "../helpers/searchQueryFormat";

const BASE_URL = "https://health.gov/myhealthfinder/api/v3/";

class myHealthFinderApi {
	static async getHealthTopicsByKeyword(keyword: string) {

		try {
			const endpoint = "topicsearch.json?keyword=";
			const res = await axios.get(`${BASE_URL}${endpoint}${searchQueryFormat(keyword)}`);

			if (!res || res?.status !== 200) {
				return { data: [],  isError: true };
			}

			if (res.data.Result.Total === 0) {
				return { data: [],  isError: false };
			}
			const mapedData = mapRawDataIntoHealthTopic(res.data.Result.Resources.Resource);

			return { data: mapedData,  isError: false };

		} catch (error: any) {
			return { data: [],  isError: true };
		}
	}

	static async getAllAvailableSuggestions() {
		try {
			const endpoint = "itemlist.json";
			const res = await axios.get(`${BASE_URL}${endpoint}`);
			if (res.status !== 200) {
				return { data: [],  isError: true };
			}

			if (res.data.Result.Total === 0) {
				return { data: [],  isError: false };
			}
			const mapedData = mapRawDataIntoAllAvailableSuggestions(res.data.Result.Items.Item);
			return { data: mapedData,  isError: false };
		} catch (error) {
			return { data: [],  isError: true };
		}
	}
}

export default myHealthFinderApi;
