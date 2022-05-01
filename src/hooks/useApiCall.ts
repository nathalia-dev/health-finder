import React, {useState, useEffect} from 'react'

export type ApiResponseType = {
    // data: any;
    // error: any;
    // isLoading: Boolean;
    fetchData: () => void
}

const useApiCall = (url: string): ApiResponseType => {
    const [data, setData] = useState<any>([]);
    const [error, setError] =  useState<any>([]);
    const [isLoading, setIsLoading] = useState<any>(true);

    const fetchData = async () => {
        try {
         const apiResponse = await fetch(url);
         const json = await apiResponse.json();
         setData(json)
        } catch (error) {
            setError(error)
        }

        setIsLoading(false)
    }

    // return {data, error, isLoading}
    return {fetchData}

}

export default useApiCall