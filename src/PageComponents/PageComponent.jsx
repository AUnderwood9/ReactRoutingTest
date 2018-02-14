import React, { Component, Fragment } from "react";
import FilmListing from "../ComponentPieces/FilmListing";
import PeopleLisitng from "../ComponentPieces/PeopleListing";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";


class PageComponent extends Component{

    renderLoading(){
        return(
            <Fragment>
                <div className="row mb-5">
                    <img className="col-12" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="Studio Ghibli"/>
                </div>
                
                <div className="row mb-5 mx-auto justify-content-between">
                    <Link to="/FilmListing" className="col-4 btn btn-sm btn-primary space-text"><span>Films</span> <i class="material-icons">movie_creation</i></Link>
                    <Link to="/PeopleLisitng" className="col-4 btn btn-sm btn-secondary space-text"><span>People</span> <i class="material-icons">person_outline</i></Link>
                </div>
                
            </Fragment>
        );
    }

    render(){
            return(
                <div className="container">
                    {/* <FilmListing /> */}
                    <BrowserRouter>
                        <Fragment>
                            {this.renderLoading()}
                            <Switch>
                                <Route exact path="/FilmListing" component={FilmListing} />
                                <Route exact path="/PeopleLisitng" component={PeopleLisitng} />
                            </Switch>
                        </Fragment>
                    </BrowserRouter>
                </div>
              );
    }
}

export default PageComponent;