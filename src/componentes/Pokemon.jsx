import React from "react";

function Pokemon(props) {

    return (
        <div>
            <p><a href={props.url}>{props.name}</a></p>
        </div>
    );
}

export default Pokemon;