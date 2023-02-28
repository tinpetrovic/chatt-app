import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css";
import Login from "./components/Login/Login";
import Header from './components/Header/Header';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import Main from './components/Main/Main';

function App() {

  const { loggedIn } = useContext(UserContext)

  return (
    <div className="app">
      <Header />
      {loggedIn ? <Main/> : <Login/>}
    </div>
  );
}

export default App;
