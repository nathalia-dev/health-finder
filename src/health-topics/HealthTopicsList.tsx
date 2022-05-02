import React from 'react'
import HealthTopicsItem from './HealthTopicItem'
import { HealthTopic  } from "../types"

interface HealthTopicsListProps {
   healthTopics: HealthTopic[]
}

const HealthTopicsList: React.FC <HealthTopicsListProps> = ({healthTopics}) => {

    return (
        <div>
            {healthTopics.map((topic) => <HealthTopicsItem key = {topic.id}{...topic}/>)}
        </div>
    )
}

export default HealthTopicsList;