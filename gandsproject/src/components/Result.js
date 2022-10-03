import React from 'react';

function Result({result}){
    return (
        <li>
            {/* <img alt="" src={result.album.images[2].url}/> */}
            {result.name}
        </li>
    )
}

export default Result;