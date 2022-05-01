import React from 'react'

interface SuggestionProps {
    setSuggestions: React.Dispatch<any>
    setKeyword: React.Dispatch<any>
    suggestion: string

}

const Suggestion: React.FC <SuggestionProps> = ({suggestion, setSuggestions, setKeyword}) => {
    
    const handleOnClick = (suggestion:string) => {
        setKeyword(suggestion)
        setSuggestions([])
    }

    return (
        <div className="suggestion" onClick={() => handleOnClick(suggestion)}>
           {suggestion}
        </div>
    )
}

export default Suggestion;