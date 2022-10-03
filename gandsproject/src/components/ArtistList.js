import React from 'react'
import Result from './Result'

function ArtistList({results}){
    return (<div>
        {results.map(result => {
            return <Result key={result.id} result={result}/>
        })}
    </div>)
}

export default ArtistList;