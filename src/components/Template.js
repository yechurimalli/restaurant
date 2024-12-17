import React from 'react';
function Template(props)
{
    return(
        <div style ={{display:"flex", gap:"80px",flexdirection:"column"}}>
            <img src={props.imgurl} alt='balaya'></img>
            <h1>{props.facebook}</h1>
            <a href={props.gmail}>Gmail</a>
            <a href={props.linkedin}>redirect</a>
        </div>
    );
}
export default Template