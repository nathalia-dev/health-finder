import { RawTopicAndCategories } from "../types"

function getWordsFromTitle(title: string): string[] {
    const cleanTitle = title.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
    return cleanTitle.split(" ")
}

function mapRawDataIntoAllAvailableSuggestions(data: RawTopicAndCategories[]) : string[] {
    const wordsFromTitles = data.flatMap((item) => getWordsFromTitle(item.Title))
    const uniqueWordsFromTitles = Array.from(new Set(wordsFromTitles))
    return uniqueWordsFromTitles
}

export default mapRawDataIntoAllAvailableSuggestions