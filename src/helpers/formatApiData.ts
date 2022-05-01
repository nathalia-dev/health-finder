import { RawHealthTopic, RawRelatedItem, RawSectionItem,  HealthTopic, RelatedItem, Section  } from "../types"

function formatApiData(res: RawHealthTopic[]) : HealthTopic[] {
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

function formatSections(sections: RawSectionItem[]): Section[] {
    return sections.map((item) => ({title: item.Title, content: item.Content}))
}

export default formatApiData