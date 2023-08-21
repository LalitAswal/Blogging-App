import { Route, Routes}  from 'react-router-dom';
import Login from './component/Login';
import SighUp  from './component/Signup';
import Home from './component/Home';



const App = () =>{
  return (
    <div className="App">
            <Routes>
      <Route exact  path="/"      element ={ <Login/>}/>
      <Route exact  path="/signup"      element ={ <SighUp/>}/>
      <Route exact  path="/home"      element ={ <Home/>}/>
      </Routes>
    </div>
  );
  }

export default App;