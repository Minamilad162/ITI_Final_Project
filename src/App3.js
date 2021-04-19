import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Admin/HomeAdmin/Home';
import ListUsers from './components/Admin/ListU/ListUsers';
import ListMovies from './components/Admin/ListMovies/ListMovies';
import ListSerieses from './components/Admin/ListSeries/ListSeries';
import ListSeasons from './components/Admin/Seasons/ListSeasons';
import ListCategories from './components/Admin/Categories/ListCategories';
import ListEpisodes from './components/Admin/Episodes/ListEpisodes';

import Navbar from './components/AdminNavbar/AdminNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoApp from './components/User/VideoPlayer/VideoApp';

class App3 extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                   
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>

                            <Route path="/ListUsers" exact>
                                <ListUsers />
                            </Route>

                            <Route path="/ListMovies" exact>
                                <ListMovies />
                            </Route>

                            <Route path="/ListSerieses" exact>
                                <ListSerieses />
                            </Route>

                            <Route path="/ListSeasons" exact>
                                <ListSeasons />
                            </Route>

                            <Route path="/ListEpisodes" exact>
                                <ListEpisodes />
                            </Route>
                            
                            <Route path="/ListCategories" exact>
                                <ListCategories />
                            </Route>

                            <Redirect to="/" />
                        </Switch>
              
                </Router>
            </div>
        );
    }
}

export default App3;
