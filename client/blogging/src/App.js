import { Route, Routes}  from 'react-router-dom';
import Login from './component/Login';
import SighUp  from './component/Signup';



const App = () =>{
  return (
    <div className="App">
            <Routes>
      <Route exact  path="/"      element ={ <Login/>}/>
      <Route exact  path="/signup"      element ={ <SighUp/>}/>
      </Routes>
    </div>
  );
  }

export default App;