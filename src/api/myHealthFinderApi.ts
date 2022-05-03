import axios from "axios";
import { request } from "http";
import formatApiData from "../helpers/formatApiData";
import formatApiDataForSuggestions from "../helpers/formatApiDataForSuggestions";
import searchQueryFormat from "../helpers/searchQueryFormat";

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://health.gov/myhealthfinder/api/v3/";

class myHealthFinderApi {
	static async getHealthTopicsByKeyword(keyword:string) {
		//to do: improve. Crio um objeto generico e geral de erro? ou deixo das mensagens?
		//se deixar as mensagens ,o que retorno no catch(error) como status?
		try {
			const endpoint = "topicsearch.json?keyword=";
			const res = await axios.get(`${BASE_URL}${endpoint}${searchQueryFormat(keyword)}`);

			if (res.status !== 200) {
				return [{ status: res.status, message: "Something went wrong, please try again later" }];
			}

			if (res.data.Result.Total === 0) {
				return [];
			}
			const formatedData = formatApiData(res.data.Result.Resources.Resource);

			return formatedData;
		} catch (error: any) {
			return [{ status: error.request.status, message: "Something went wrong, please try again later" }];
		}
	}

    //to do: improve. 
    //1)Nome do method: fica o nome que api da ou coloco o nome do que estou pegando?
    //2) posso retornar no catch(error) um empty array? nao quero bugar a aplicacao pq o autocomplete nao deu certo.
    static async getItemList() {
        try {
            const endpoint = "itemlist.json";
            const res = await axios.get(`${BASE_URL}${endpoint}`);
            if (res.status !== 200) {
				return [];
			}

			if (res.data.Result.Total === 0) {
				return [];
			}
            const formatedData = formatApiDataForSuggestions(res.data.Result.Items.Item);
            return formatedData
        } catch (error) {
            return []
        }
    }
}

export default myHealthFinderApi;
