import React, { Fragment } from "react";

function Person(props){
    return(
        <Fragment>
            <h3>Name: {props.name}</h3>
            <h5>Age: {props.age}</h5>
            <h5>Gender: {props.gender}</h5>
            <h4>Hair Color: {props.hairColor}</h4>
            <h4>Eye Color: {props.eyeColor}</h4>
            <hr />
        </Fragment>
    );
}

export default Person;