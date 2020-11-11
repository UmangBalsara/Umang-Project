import React,{Component,Suspense, lazy} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loading from './components/Loading';
const Header = lazy(() => import("./components/Header"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const AddStudents = lazy(() => import("./components/AddStudents"));
const NotFound = lazy(() => import("./components/NotFound"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<Loading/>}>
          <Router>
            <div className="App">
              <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/header" exact component={Header}/>
                <Route path="/add-student" exact component={AddStudents} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="*" exact component={NotFound} />
              </Switch>
            </div>
          </Router>
        </Suspense>
      </div>
    )
  }
};

export default App;




