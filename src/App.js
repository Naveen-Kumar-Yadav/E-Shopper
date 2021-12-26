import Footer from './components/Footer';
import Header from  './components/Header';
import{BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from  './components/Home';
import Login from './components/Login';
import Contact from './components/Contact';
import FetchHttp from './components/FetchHttp';
import Users from './components/Users';
import Myforms from './components/Myforms';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login}/>
          <Route path="/Posts" exact component={FetchHttp}/>
          <Route path="/users" exact component={Users}/>
          <Route path="/forms" exact component={Myforms}/>
        </Switch>
      </div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
