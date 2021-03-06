import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/layout/Header";
import Pictures from "./components/posts/Pictures";
import AddPicture from "./components/posts/AddPicture";
import About from "./components/pages/About";
// import uuid from 'uuid';

import { Provider } from './context';

// import dogs from './pics/shadowviolet.jpeg';
// import puppy from './pics/puppy.jpeg';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  // state = {
  //   pictures: [
  //     {
  //       id: uuid.v4(),
  //       // title: 'Patient',
  //       desc: 'Shadow waiting to go for a walk.',
  //       image: require('./pics/puppy.jpeg')
  //     },
  //     {
  //       id: uuid.v4(),
  //       // title: 'Chillin',
  //       desc: 'Shadow hanging out with his buddy Violet.',
  //       image: require('./pics/shadowviolet.jpeg')
  //     }
  //   ]
  // }

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="ShadowGram" />
            <div className="container">
              <Switch>
                <Route exact path="/posts" component={Pictures}/>
                <Route exact path="/posts/add" component={AddPicture} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;