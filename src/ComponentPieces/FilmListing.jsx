import React, { Component, Fragment } from "react";
import Film from "./Film";

class FilmListing extends Component{
        constructor(props){
            super(props);

            this.state = {
                films: []
            };
        }

        componentDidMount(){
            fetch("https://ghibliapi.herokuapp.com/films")
            .then(
                (response) => {
                    return response.json();
                }
            )
            .then(
                (filmList) => {
                    this.setState(
                        {
                            films: filmList
                        }
                    )
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
                    {this.state.films.map(
                        (item, index) => {
                            return (
                                    <div key={`Film-${index}`} className="jumbotron mb-5">
                                        <Film title={item.title} year={item.release_date} director={item.director} description={item.description}/>
                                    </div>
                                );
                        }
                    )}
                </Fragment>
                // <h1>More Stuff</h1>
            );
        }   
}

export default FilmListing;