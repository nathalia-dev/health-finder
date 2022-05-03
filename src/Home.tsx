import React, {useState} from 'react'
import Error from './Error';
import Search from './search/Search';
import HealthTopicsList from './health-topics/HealthTopicsList'
import { HealthTopic } from "./types"
import './health-topics/healthTopic.css'

const Home: React.FC = () => {

    const [healthTopics, setHealthTopics] = useState<HealthTopic[]>([])
    const [error, setError] = useState<any>(null)
    const [isLoadingHealthTopics, setIsLoadingHealthTopics] = useState<Boolean>(false)

    if (error) {
        return (
            <Error />
        )
    }
    
    return (
        <div>
            <Search setHealthTopics={setHealthTopics} setError={setError} setIsLoadingHealthTopics={setIsLoadingHealthTopics} />
            {isLoadingHealthTopics && <div className="loading my-3"><img src="https://tenor.com/view/loading-waiting-buffering-gif-15460501.gif" alt="isLoadingGif" style={{backgroundColor: "grey"}}></img></div>}
            {healthTopics.length > 0? <HealthTopicsList healthTopics={healthTopics}/> : null}
        </div>
    )
}



export default Home;