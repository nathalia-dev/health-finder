import { RawTopic } from "../types"

function mapRawDataIntoAllAvailableSuggestions(data: RawTopic[]) : string[] {

    const result: string[] = []
    //todo: improve  (eliminar um caracter sozinho? )
    
    const topicsItem = data.forEach((item) => {
        //saving title with no special character and always lower case, to facilitate the process to eliminate duplicates.
        const element = (item.Title).toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
        const words = element.split(" ")
        result.push(...words)
    })

    //eliminating duplicates.
    let unique = Array.from(new Set(result))

    return unique

}




export default mapRawDataIntoAllAvailableSuggestions