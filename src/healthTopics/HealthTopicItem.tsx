import React, {useState} from 'react'
import { HealthTopic } from "../types"
import HealthTopicRelatedItem from './HealthTopicRelatedItem'
import HealthTopicSection from './HealthTopicSection'

// type HealthTopicItemProps = FormatHealthTopic & {
//     test: string
// }


const HealthTopicItem: React.FC <HealthTopic> = ({id, title, categories, image, relatedItem, sections}) => {
    const [expand, setExpand] = useState(false)

    return (
        <div>
            <h1>{title}</h1>
            <p>{categories}</p>
            <img src={image.imageUrl} alt={image.imageAlt} style={{width: "30%"}}></img>
            {relatedItem.map((relItem) => <HealthTopicRelatedItem key={relItem.id} {...relItem}/>)}
            {sections.map((secItem) => <HealthTopicSection {...secItem}/>)}
        </div>
    )
}

export default HealthTopicItem;