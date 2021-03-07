import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './Styles/main.scss';

import Main from './Pages/Main/Main';
import Wrapper from './Components/Wrapper/Wrapper';

export const App: React.FunctionComponent = () => {

    React.useEffect(():void => {
        
    }, [])

    return (
        <Router>
            <Wrapper>
                <Switch>
                    <Route exact path="/" component={Main} />
                </Switch>
            </Wrapper>
        </Router>
    );
}