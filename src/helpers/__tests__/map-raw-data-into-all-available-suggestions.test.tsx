import mapRawDataIntoAllAvailableSuggestions from "../mapRawDataIntoAllAvailableSuggestions";
import { mockDataForSuggestions, expectedFunctionResultForSuggestions } from "../__fixtures__/mockDataForTests";

describe("#mapRawDataIntoAllAvailableSuggestions", () => {
	it("returns an array", () => {
		expect(Array.isArray(mapRawDataIntoAllAvailableSuggestions(mockDataForSuggestions))).toEqual(true);
	});

	it("returns the correct result, bringing singles words as an array of strings", () => {
		expect(mapRawDataIntoAllAvailableSuggestions(mockDataForSuggestions)).toEqual(expectedFunctionResultForSuggestions);
	});
});
