import React, {useState} from 'react'
import { Section } from '../types';
import parse from 'html-react-parser';

const HealthTopicSection: React.FC <Section> = ({title, content}) => {
    const [expandContent, setExpandContent] = useState(false)

    const handleOnClickContent = () => {
        setExpandContent(!expandContent)
    }

    return (
        <div>
            <h3>{title}</h3>
            <button onClick={handleOnClickContent}>{expandContent? "close" : "read more"}</button>
            {expandContent && <div>{parse(content)}</div>}
        </div>
    )
}

export default HealthTopicSection;