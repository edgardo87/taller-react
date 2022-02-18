import React from "react";

function Pokemon(props) {

    return (
        <div>
            <p><b>Nombre:</b> {props.name}</p>
            
            <p><b>URL:</b> <a href={props.url}>{props.url}</a></p>
        </div>
    );
}

export default Pokemon;