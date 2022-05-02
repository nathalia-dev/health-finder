import React from 'react'

interface SuggestionProps {
    setMatchedSuggestions: React.Dispatch<any>
    setKeyword: React.Dispatch<any>
    matchedSuggestion: string

}

const Suggestion: React.FC <SuggestionProps> = ({matchedSuggestion, setMatchedSuggestions, setKeyword}) => {

    const handleOnClick = (suggestion:string) => {
        setKeyword(suggestion)
        setMatchedSuggestions([])
    }

    return (
        <div className="suggestion" onClick={() => handleOnClick(matchedSuggestion)}>
           {matchedSuggestion}
        </div>
    )
}

export default Suggestion;