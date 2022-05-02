import { RawTopic } from "../types"

function formatApiDataForSuggestions(data: RawTopic[]) : string[] {

    const result: string[] = []
    //todo: improve
    const topicsItem = data.forEach((item) => {
        const element = item.Title
        const words = element.split(" ")
        result.push(...words)
    })

    let unique = Array.from(new Set(result))
    //returning an array of strings with no special characters.
    return unique.map((string) => string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''))


}




export default formatApiDataForSuggestions