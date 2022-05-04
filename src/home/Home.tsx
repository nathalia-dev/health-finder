import React, {useState} from 'react'
import Error from '../error/Error';
import Search from '../search/Search';
import HealthTopicsList from '../health-topics/HealthTopicsList'
import { HealthTopic } from "../types"
import './home.css'

const Home: React.FC = () => {

    const [healthTopics, setHealthTopics] = useState<HealthTopic[]>([])
    const [isError, setIsError] = useState<Boolean>(false)
    const [isLoadingHealthTopics, setIsLoadingHealthTopics] = useState<Boolean>(false)

    if (isError) {
        return (
            <Error />
        )
    }
    
    return (
        <div className="content-wrap">
            <Search setHealthTopics={setHealthTopics} setIsError={setIsError} setIsLoadingHealthTopics={setIsLoadingHealthTopics} />
            {isLoadingHealthTopics && <div className="loading my-3"><img src="https://tenor.com/view/loading-waiting-buffering-gif-15460501.gif" alt="isLoadingGif" style={{backgroundColor: "grey"}}></img></div>}
            {healthTopics.length > 0? <HealthTopicsList healthTopics={healthTopics}/> : <p className="lead"> Please, initiate your search or try different keywords.</p>}

        </div>
    )
}



export default Home;