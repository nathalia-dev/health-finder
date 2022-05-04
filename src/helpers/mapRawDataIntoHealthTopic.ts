import { RawHealthTopic, RawRelatedItem, RawSectionItem,  HealthTopic, RelatedItem, Section  } from "../types"


function mapRawDataIntoHealthTopic(res: RawHealthTopic[]) : HealthTopic[] {
    return res.map((item) => (
        {title: item.Title,
         id: item.Id, 
         categories: item.Categories, 
         image: {imageUrl: item.ImageUrl, imageAlt: item.ImageAlt}, 
         relatedItem: formatRelatedItens(item.RelatedItems.RelatedItem), 
         sections: formatSections(item.Sections.section)
        }))

}

function formatRelatedItens(relItens: RawRelatedItem[]): RelatedItem[] {
    return relItens.map((item) => ({title: item.Title, url: item.Url, id: item.Id}))
}

//to improve: se nao tiver title salvar com algo do tipo "no title"?
function formatSections(sections: RawSectionItem[]): Section[] {
    const { v4: uuidv4 } = require('uuid');
    return sections.map((item) => ({title: item.Title, content: item.Content, id: uuidv4()}))
}

export default mapRawDataIntoHealthTopic
