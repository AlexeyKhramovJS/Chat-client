import { Route, Switch, Redirect } from "react-router-dom";
import Chat from '../components/Chat/Chat';
import Welcom from '../components/Welcom/Welcom';

const RouterApp = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Welcom /> 
            </Route>

            <Route exact path='/chat'>
                <Chat /> 
            </Route>

            <Redirect to='/' />
      </Switch>
    );
};

export default RouterApp;