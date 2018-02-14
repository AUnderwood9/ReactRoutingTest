import React, { Component, Fragment } from "react";
import Person from "./Person";

class PeopleListing extends Component {
    constructor(props){
        super(props);

        this.state = {
            people: []
        }
    }

    componentDidMount(){
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(
            (response) => {
                return response.json();
            }
        )
        .then(
            (peopleList) => {
                this.setState({
                    people: peopleList
                });
            }
        )
        .catch(
            (err) => {
                if(err) console.log(err);
            }
        )

        
    }
    
    render(){
        return(
            <Fragment>
                {/* <h2>Some More Stuff Again</h2> */}
                {this.state.people.map(
                    (item, index) => {
                        let age = ((item.age === "" || "NA") ? "Un-aging" : item.age);
                        let gender = (item.gender === "NA" ? "Guess" : item.gender);

                        // console.log(item.name, gender, age, item.eye_color, item.hair_color);
                        return (
                                <div key={`Person-${index}`} className="jumbotron species-theme mb-2">
                                    <Person name={item.name} gender={gender} age={age} eyeColor={item.eye_color} hairColor={item.hair_color} />
                                </div>
                            );
                    }
                )}
            </Fragment>
        );
    }
}

export default PeopleListing;