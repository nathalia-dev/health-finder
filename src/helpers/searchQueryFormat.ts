
function searchQueryFormat(string: string): string {

    //cleaning eventually double (or more) white's space.
    let s = string.replace(/\s+/g, ' ').trim()

    //replacing the white spaces for %20.
    let query = s.replace(/\s/g, "%20")

    return query
}

export default searchQueryFormat