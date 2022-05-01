import { RawTopic } from "../types"

function formatApiDataForAutoComplete(data: RawTopic[]) : string[] {

    const result = []

    const topicsItem = data.map((item) => item.Title)
    for (let element of topicsItem) {
        const words = element.split(" ")
        result.push(...words)
    }
    let unique = Array.from(new Set(result))
    //returning an array of strings with no special characters.
    return unique.map((string) => string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''))


}




export default formatApiDataForAutoComplete