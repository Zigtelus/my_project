import { Route, Routes } from 'react-router-dom';
import AppClassName from './App.module.scss';
import Navi from './components/Navi';
import Home from './components/main/home/Home';
import Profile from './components/main/Profile';
import Dialogs from './components/main/dialogs/Dialogs';

function App() {
  return (
    <div className={AppClassName.app}>
      <header className="App-header">
        <Navi />
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/dialogs/' element={ <Dialogs /> } />
          <Route path='/profile' element={ <Profile /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
