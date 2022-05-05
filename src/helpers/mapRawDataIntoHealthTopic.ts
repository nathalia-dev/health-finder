import { RawHealthTopic, RawRelatedItem, RawSectionItem,  HealthTopic, RelatedItem, Section  } from "../types"


const mapRawDataIntoHealthTopic = (res: RawHealthTopic[]) : HealthTopic[] => {
    return res.map((item) => (
        {title: item.Title,
         id: item.Id, 
         categories: item.Categories, 
         image: {imageUrl: item.ImageUrl, imageAlt: item.ImageAlt}, 
         relatedItem: formatRelatedItens(item.RelatedItems.RelatedItem), 
         sections: formatSections(item.Sections.section)
        }))

}

const formatRelatedItens = (relItens: RawRelatedItem[]): RelatedItem[] => {
    return relItens.map((item) => ({title: item.Title, url: item.Url, id: item.Id}))
}

const formatSections = (sections: RawSectionItem[]): Section[] => {
    const { v4: uuidv4 } = require('uuid');
    return sections.map((item) => ({title: item.Title, content: item.Content, id: uuidv4()}))
}

export default mapRawDataIntoHealthTopic
