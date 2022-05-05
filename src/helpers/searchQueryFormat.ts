const searchQueryFormat = (string: string): string => {
	const cleanWhiteSpaceFromString = string.replace(/\s+/g, " ").trim();

	const query = cleanWhiteSpaceFromString.replace(/\s/g, "%20");

	return query;
};

export default searchQueryFormat;
