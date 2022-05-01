import React, {useState} from 'react'
import Search from './search/Search';
import HealthTopicsList from './healthTopics/HealthTopicsList'
import { HealthTopic } from "./types"

const Home: React.FC = () => {

    const [healthTopics, setHealthTopics] = useState<HealthTopic[]>([])
    const [error, setError] = useState<any>([])
    const [isLoading, setIsLoading] = useState<Boolean>(true)

    console.log("api response", healthTopics)
    
    return (
        <div>
            <Search setHealthTopics={setHealthTopics} setError={setError} setIsLoading={setIsLoading} />
            {healthTopics.length > 0? <HealthTopicsList healthTopics={healthTopics}/> : null}
        </div>
    )
}

export default Home;