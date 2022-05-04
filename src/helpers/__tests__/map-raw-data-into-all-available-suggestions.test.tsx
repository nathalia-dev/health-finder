import mapRawDataIntoAllAvailableSuggestions from '../mapRawDataIntoAllAvailableSuggestions';
import {mockDataForSuggestions, expectedFunctionResultForSuggestions} from '../__fixtures__/mockDataForTests'


describe("#mapRawDataIntoAllAvailableSuggestions", function () {

    it("returns an array", function () {
      expect(Array.isArray(mapRawDataIntoAllAvailableSuggestions(mockDataForSuggestions))).toEqual(true)
    });

    it("returns the correct result, bringing singles words as an array of strings", function () {
      expect(mapRawDataIntoAllAvailableSuggestions(mockDataForSuggestions)).toEqual(expectedFunctionResultForSuggestions);
    
    });
  
})  