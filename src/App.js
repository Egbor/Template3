import Header from './components/Header';
import Home from './components/Home';
import Person from './components/Person'
import Persons from './components/Persons';
import Footer from './components/Footer';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function App() {
    const {t, i18n} = useTranslation();

  return (
    <div className="App">
      <Header t={t} i18n={i18n}/>
      <Switch>
        <Route exact path='/' render={() => <Home t={t} i18n={i18n}/>}/>
        <Route path="/persons" render={() => <Persons t={t} i18n={i18n}/>}/>
        <Route path="/person" render={() => <Person t={t} i18n={i18n}/>}/>
      </Switch>
      <Footer t={t} i18n={i18n}/>
    </div>
  );
}

export default App;
