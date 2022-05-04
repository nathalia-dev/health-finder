import searchQueryFormat from '../searchQueryFormat'

describe("#searchQueryFormat", function () {
    it("returns a string", function () {
      expect(typeof searchQueryFormat("mental health")).toEqual("string");
    });

    it("returns the string formated in the correct way", function () {
        expect(searchQueryFormat("mental health")).toEqual("mental%20health");
        expect(searchQueryFormat("mental")).toEqual("mental");
        expect(searchQueryFormat("mental      health       disease")).toEqual("mental%20health%20disease");
      });
  
})  