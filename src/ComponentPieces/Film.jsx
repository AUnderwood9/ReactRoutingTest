import React, { Fragment } from "react";

function Film(props){
    return(
        <Fragment>
            <h2>{props.title}</h2>
            <h5>({props.year})</h5>
            <h3>Director: {props.director}</h3>
            <h4>{props.description}</h4>
            <hr/>
        </Fragment>
    );
}

export default Film;