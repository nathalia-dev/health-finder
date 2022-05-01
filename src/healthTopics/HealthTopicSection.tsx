import React, {useState} from 'react'
import { Section } from '../types';
import parse from 'html-react-parser';

const HealthTopicSection: React.FC <Section> = ({title, content}) => {
    const [expand, setExpand] = useState(false)

    return (
        <div>
            <h3>{title}</h3>
            <div>{parse(content)}</div>
            <hr/>
        </div>
    )
}

export default HealthTopicSection;