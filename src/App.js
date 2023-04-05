import Login from './components/login/login'
import Main  from './components/main/main';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";




 function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router> 
    </>
  );
}

export default App;
