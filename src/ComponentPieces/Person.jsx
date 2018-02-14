import React, { Fragment } from "react";

function Person(props){
    return(
        <Fragment>
            <h3 className="col-12">Name: {props.name} <span className="badge"><h5>Age: {props.age}</h5></span> <span className="badge"><h5>Gender: {props.gender}</h5></span> </h3>
            {/* <h5>Age: {props.age}</h5>
            <h5>Gender: {props.gender}</h5> */}
            <h4 className="col-12">Hair Color: {props.hairColor}</h4>
            <h4 className="col-12">Eye Color: {props.eyeColor}</h4>
            <hr />
        </Fragment>
    );
}

export default Person;