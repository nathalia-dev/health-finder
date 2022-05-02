import React, {useState} from 'react'
import { RelatedItem } from '../types';

const HealthTopicRelatedItem: React.FC <RelatedItem> = ({title, url}) => {
    const [expand, setExpand] = useState(false)

    const handleOnClick = () => {
        setExpand(!expand)
    }

    return (
        <div>
             <h3>{title}</h3>
            <a href={url}>Read More</a>
        </div>
    )
}

export default HealthTopicRelatedItem;