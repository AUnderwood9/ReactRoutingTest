import React, { Fragment } from "react";

function Film(props){
    return(
        <Fragment>
            <h2 className="col-12">{props.title}<span className="badge"><h5>({props.year})</h5></span></h2>
            {/* <h5 className="col-6">({props.year})</h5> */}
            <h3 className="col-12">Director: {props.director}</h3>
            <h4 className="col-12">{props.description}</h4>
            <hr className="col-10"/>
        </Fragment>
    );
}

export default Film;