import React, {useState} from 'react'
import { HealthTopic } from "../types"
import HealthTopicRelatedItem from './HealthTopicRelatedItem'
import HealthTopicSection from './HealthTopicSection'

// type HealthTopicItemProps = FormatHealthTopic & {
//     test: string
// }


const HealthTopicItem: React.FC <HealthTopic> = ({id, title, categories, image, relatedItem, sections}) => {
    const [expandRelItem, setExpandRelItem] = useState(false)
    const [expandSection, setExpandSection] = useState(false)

    const handleOnClickRelItem = () => {
        setExpandRelItem(!expandRelItem)
    }

    const handleOnClickSection = () => {
        setExpandSection(!expandSection)
    }
    console.log(expandSection)



    return (
        <div>
            <h1>{title}</h1>
            <p>{categories}</p>
            <img src={image.imageUrl} alt={image.imageAlt} style={{width: "30%"}}></img>
            <div>
                <h2>Related Items</h2>
                <button onClick={handleOnClickRelItem}>{expandRelItem? <i className="fas fa-minus"></i>: <i className="fas fa-plus"></i>}</button>
            </div>
            {expandRelItem && relatedItem.map((relItem) => <HealthTopicRelatedItem key={relItem.id} {...relItem}/>)}
            <div>
                <h2>Sections</h2>
                <button onClick={handleOnClickSection}>{expandSection? <i className="fas fa-minus"></i>: <i className="fas fa-plus"></i>}</button>
            </div>
            {expandSection && sections.map((secItem) => <HealthTopicSection {...secItem}/>)}
        </div>
    )
}

export default HealthTopicItem;