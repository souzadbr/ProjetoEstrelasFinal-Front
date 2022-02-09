import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './auth';
import Cadastro from './components/pages/Cadastro';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Login}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <Route exact path='/cadastro' component={Cadastro}/>
        </Switch>
    </Router>

);

export default Routes;