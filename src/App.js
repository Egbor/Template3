import Header from './components/Header';
import Home from './components/Home';
import Persons from './components/Persons';
import Footer from './components/Footer';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/persons" component={Persons}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
