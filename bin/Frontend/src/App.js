import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Login from './components/Login';
import RegisterComponent from './components/RegisterComponent';

function App() {
    return ( 
        <div  style={{ background: "beige"}}>
            <Router>
                <HeaderComponent / >
                    <div className="container">
                        <Switch>    
                            <Route path = '/' exact component={Login}></Route>
                            <Route path = '/register' exact component={RegisterComponent}></Route>
                        </Switch>
                    </div>
                <FooterComponent / >
            </Router>
        </div>
    );
}

export default App;