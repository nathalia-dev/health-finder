import searchQueryFormat from "../searchQueryFormat";

describe("#searchQueryFormat", () => {
	it("returns a string", () => {
		expect(typeof searchQueryFormat("mental health")).toEqual("string");
	});

	it("returns the string formated in the correct way", () => {
		expect(searchQueryFormat("mental health")).toEqual("mental%20health");
		expect(searchQueryFormat("mental")).toEqual("mental");
		expect(searchQueryFormat("mental      health       disease")).toEqual("mental%20health%20disease");
	});
});
