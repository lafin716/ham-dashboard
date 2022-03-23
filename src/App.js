import './App.css';
import Header from './components/_include/Header';
import Sidebar from './components/_include/Sidebar';
import Footer from './components/_include/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Intro from './components/intro/Intro';
import AppList from './components/app/AppList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/app"><AppList /></Route>
          <Route path="/"><Intro /></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
