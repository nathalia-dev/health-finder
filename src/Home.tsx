import React, {useState} from 'react'
import Search from './search/Search';
import HealthTopicsList from './healthTopics/HealthTopicsList'
import { HealthTopic } from "./types"

const Home: React.FC = () => {

    const [healthTopics, setHealthTopics] = useState<HealthTopic[]>([])
    const [error, setError] = useState<any>([])
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    
    return (
        <div>
            <Search setHealthTopics={setHealthTopics} setError={setError} setIsLoading={setIsLoading} isLoading={isLoading} />
            {isLoading && <div className="loading"><img src="https://tenor.com/view/loading-gif-9212724.gif"></img></div>}
            {healthTopics.length > 0? <HealthTopicsList healthTopics={healthTopics}/> : null}
        </div>
    )
}

export default Home;