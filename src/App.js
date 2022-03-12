// import './App.css';
import Signin from './components/Signin'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Otppage from './components/Otppage';

function App() {
  return (
    <div>
      <Signin/>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Signin} />
        <Route path="/otppage" component={Otppage} />
        <Route path="/signining" component={Verifypage} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
