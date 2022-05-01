
export interface RawTopic {
    Type: string
    Id: string
    Title: string
    ParentId: number
    TranslationId: string
}

export interface RawSectionItem {
    Title: string
    Description?: string
    Content: string
}

export interface RawRelatedItem {
    Type: string
    Id: string
    Title: string
    Url: string
}
  
export interface RawHealthTopic {
    Type: string
    Id: string
    Title: string
    TransactionId: string
    TransactioTitle?: string
    Categories: string
    Populations?: string
    MyHFTTitle?: string
    MyHFDescription?: string
    MyHFCategory?: string
    MyHFCategoryHeading?: string
    Lastupdate: string
    ImageUrl: string
    ImageAlt: string
    AccessibleVersion: string
    RelatedItems:{
      RelatedItem: RawRelatedItem[]
    }
    Sections:{
      section: RawSectionItem[]
    }
}

export interface ImageItem {
    imageUrl: string
    imageAlt: string
}

export interface RelatedItem {
    title: string
    url: string
    id: string
}

export interface Section {
    title: string
    content: string 
}

export interface HealthTopic {
    id: string
    title: string
    categories: string
    image: ImageItem
    relatedItem: RelatedItem[]
    sections: Section[]
}

