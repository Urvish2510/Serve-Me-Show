import './App.css';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premieres from './components/Premieres';
import Footer from './components/Footer/Footer';
import AllMoviesFetch from './components/AllMoviesFetch';
import SingleMovieFetch from './components/SingleMovieFetch';
import Registration from './components/Registration.js';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Serve-Me-Show"
  }, []);
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <SliderImages />
            <CardsSlider />
            <Premieres />
          </Route>
          <Route exact path="/movies">
            <AllMoviesFetch />
          </Route>
          <Route exact path="/movies/:movid">
            <SingleMovieFetch />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// rafce