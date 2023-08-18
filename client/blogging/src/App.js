import { Route , Routes} from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/Signup';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  ); // vuseRout
}

export default App;
